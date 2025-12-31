// src/lib.rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn init_logging() {
    console_error_panic_hook::set_once();
}

#[derive(Debug, Clone)]
pub struct Neuron {
    // STATE
    pub voltage: f32,      // Current Membrane Potential (e.g., -70mV normalised to 0.0)
    
    // PROPERTIES
    pub decay_rate: f32,   // How fast voltage leaks out (e.g., 0.9 per tick)
    pub threshold: f32,    // Voltage required to spike (e.g., 1.0)
    pub is_spiking: bool,  // Did it fire in this specific tick?
}

impl Neuron {
    pub fn new() -> Self {
        Self {
            voltage: 0.0,
            // A decay of 0.9 means it loses 10% of its charge every tick if no input comes in.
            decay_rate: 0.90, 
            threshold: 1.0,
            is_spiking: false,
        }
    }

    /// The "Tick" function - represents 1 unit of time (e.g. 20ms)
    /// This is where the Differential Equation happens.
    pub fn update(&mut self, input_current: f32) {
        let dt = 1.0; // Time step
        let capacitance = 1.0; // Capacitance of the membrane

        // 1. Add Input (Integration)
        self.voltage += (input_current * dt) / capacitance;

        // 2. Apply Decay (Leak)
        // If no input, voltage drops: 0.8 -> 0.72 -> 0.64...
        self.voltage *= self.decay_rate;

        // 3. Check Threshold (Fire)
        if self.voltage >= self.threshold {
            self.fire();
        } else {
            self.is_spiking = false;
        }
    }

    fn fire(&mut self) {
        self.is_spiking = true;
        // Reset voltage. In biology, this is hyperpolarization. 
        // We'll just set it to 0.0 for simplicity.
        self.voltage = 0.0; 
    }
}

#[wasm_bindgen]
pub struct Brain {
    // The Neurons
    neuron_bell: Neuron,
    neuron_food: Neuron,
    neuron_salivate: Neuron,

    // The Synapses (Weights)
    // 1. Food -> Salivate is instinct. It's strong and fixed.
    weight_food_salivate: f32, 
    
    // 2. Bell -> Salivate is learned. It starts at 0.
    weight_bell_salivate: f32,
}

#[wasm_bindgen]
impl Brain {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self {
            neuron_bell: Neuron::new(),
            neuron_food: Neuron::new(),
            neuron_salivate: Neuron::new(),
            
            weight_food_salivate: 1.5, // Strong enough to trigger a spike immediately (Threshold is 1.0)
            weight_bell_salivate: 0.0, // Starts disconnected
        }
    }

    /// Run the simulation for 1 time tick
    /// bell_triggered: Did the user click the Bell button?
    /// food_triggered: Did the user click the Food button?
    pub fn tick(&mut self, bell_triggered: bool, food_triggered: bool) {
        // 1. Calculate Inputs for Sensory Neurons (Bell & Food)
        // If user clicks, we inject current. If not, 0.0.
        let bell_current = if bell_triggered { 1.5 } else { 0.0 };
        let food_current = if food_triggered { 1.5 } else { 0.0 };

        // 2. Update Sensory Neurons
        self.neuron_bell.update(bell_current);
        self.neuron_food.update(food_current);

        // 3. Calculate Input for Motor Neuron (Salivate)
        // The input is the sum of (Incoming Spike * Synaptic Weight)
        let mut salivate_input = 0.0;

        if self.neuron_bell.is_spiking {
            salivate_input += self.weight_bell_salivate;
        }
        if self.neuron_food.is_spiking {
            salivate_input += self.weight_food_salivate;
        }

        // 4. Update Motor Neuron
        self.neuron_salivate.update(salivate_input);

        // 5. Run Learning Rule (The "Magic")
        self.update_learning();
    }

    /// This is where Hebbian Learning happens
    fn update_learning(&mut self) {
        // PAIRING: Strengthen when Bell AND Food are presented together
        // This is classical conditioning - the bell becomes associated with food
        if self.neuron_bell.is_spiking && self.neuron_food.is_spiking {
            self.weight_bell_salivate += 0.1; 
            
            // Cap the weight so it doesn't grow to infinity
            if self.weight_bell_salivate > 1.5 {
                self.weight_bell_salivate = 1.5;
            }
        }
        // EXTINCTION: Weaken when Bell rings WITHOUT Food
        // The dog learns the bell no longer predicts food
        else if self.neuron_bell.is_spiking && !self.neuron_food.is_spiking {
            self.weight_bell_salivate -= 0.15; // Weaken (faster for cleaner extinction)
            
            if self.weight_bell_salivate < 0.0 {
                self.weight_bell_salivate = 0.0;
            }
        }
    }

    pub fn get_salivate_voltage(&self) -> f32 {
        self.neuron_salivate.voltage
    }

    pub fn is_salivate_spiking(&self) -> bool {
        self.neuron_salivate.is_spiking
    }

    pub fn get_bell_weight(&self) -> f32 {
        self.weight_bell_salivate
    }
}