use wasm_bindgen::prelude::*;

const SCREEN_WIDTH: usize = 64;
const SCREEN_HEIGHT: usize = 32;
const RAM_SIZE: usize = 4096; // 4KB of RAM
const NUM_REGISTERS: usize = 16; // V0 through VF
const STACK_SIZE: usize = 16; // How many function calls deep we can go
const KEY_COUNT: usize = 16;

const FONTSET: [u8; 80] = [
  0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
  0x20, 0x60, 0x20, 0x20, 0x70, // 1
  0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
  0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
  0x90, 0x90, 0xF0, 0x10, 0x10, // 4
  0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
  0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
  0xF0, 0x10, 0x20, 0x40, 0x40, // 7
  0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
  0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
  0xF0, 0x90, 0xF0, 0x90, 0x90, // A
  0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
  0xF0, 0x80, 0x80, 0x80, 0xF0, // C
  0xE0, 0x90, 0x90, 0x90, 0xE0, // D
  0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
  0xF0, 0x80, 0xF0, 0x80, 0x80, // F
];

#[wasm_bindgen]
extern "C" {
  // This tells Rust: "There is a JS function called Math.random()"
  #[wasm_bindgen(js_namespace = Math)]
  fn random() -> f64;
}

#[wasm_bindgen]
pub struct Chip8 {
  // --- THE MEMORY ---
  pc: u16,      // Program Counter: Points to the current instruction in RAM
  ram: Vec<u8>, // Main Memory stored as a vector to put it on the heap

  // --- THE REGISTERS ---
  v_reg: Vec<u8>, // 16 General Purpose Registers (V0-VF)
  i_reg: u16,     // Index Register: Points to memory locations (for reading/writing)

  // --- THE STACK ---
  sp: u16,         // Stack Pointer
  stack: Vec<u16>, // Stack Memory stored as a vector to put it on the heap

  // --- THE OUTPUT ---
  display: Vec<bool>, // 64x32 pixels. True = White, False = Black.

  // --- TIMERS ---
  dt: u8, // Delay Timer (Counts down at 60Hz)
  st: u8, // Sound Timer (Beeps when > 0)

  // --- INPUT ---
  keys: Vec<bool>,

  // --- DEBUG ---
  execution_log: Vec<String>,
}

#[wasm_bindgen]
impl Chip8 {
  #[wasm_bindgen(constructor)]
  pub fn new() -> Chip8 {
    let mut new_emu = Chip8 {
      pc: 0x200, // PC starts at 512 (Standard start for CHIP-8 programs)
      ram: vec![0; RAM_SIZE],
      v_reg: vec![0; NUM_REGISTERS],
      i_reg: 0,
      stack: vec![0; STACK_SIZE],
      sp: 0,
      display: vec![false; SCREEN_WIDTH * SCREEN_HEIGHT],
      dt: 0,
      st: 0,
      keys: vec![false; KEY_COUNT],
      execution_log: Vec::new(),
    };

    // Load the fontset into the first 80 bytes of RAM
    for i in 0..80 {
      new_emu.ram[i] = FONTSET[i];
    }

    return new_emu;
  }

  // We'll call this from JavaScript 60 times a second
  pub fn tick(&mut self) {
    // 1. Fetch
    let opcode = self.fetch();

    // 2. Log
    let desc = self.disassemble(opcode);
    let log_entry = format!("PC:{:04X} | Op:{:04X} | {}", self.pc - 2, opcode, desc);

    self.execution_log.push(log_entry);

    // Keep only the last 10 lines to save memory
    if self.execution_log.len() > 14 {
      self.execution_log.remove(0);
    }

    // 3. Decode & Execute
    self.execute(opcode);

    // 4. Update Timers (Logic later)
    self.update_timers();
  }

  pub fn get_execution_log(&self) -> String {
    self.execution_log.join("\n")
  }

  pub fn get_display(&self) -> Vec<u8> {
    self
      .display
      .iter()
      .map(|&b| if b { 1 } else { 0 })
      .collect()
  }

  fn update_timers(&mut self) {
    if self.dt > 0 {
      self.dt -= 1;
    }

    if self.st > 0 {
      if self.st == 1 {
        // BEEEP! (In a real emulator, we might trigger a JS callback here)
      }
      self.st -= 1;
    }
  }

  // Helper: Combines two bytes from RAM to make one Opcode
  fn fetch(&mut self) -> u16 {
    let higher_byte = self.ram[self.pc as usize] as u16;
    let lower_byte = self.ram[(self.pc + 1) as usize] as u16;

    // Combine them: (High << 8) | Low
    let opcode = (higher_byte << 8) | lower_byte;

    // Move the PC forward by 2 bytes for the next cycle
    self.pc += 2;

    return opcode;
  }

  // push whatever is at the pc to the stack (Call Subroutine)
  fn push(&mut self) {
    if self.sp as usize >= STACK_SIZE {
      panic!("Stack Overflow!");
    }
    self.stack[self.sp as usize] = self.pc;
    self.sp += 1;
  }

  // Helper: Pop PC from Stack (Return from Subroutine)
  fn pop(&mut self) {
    if self.sp == 0 {
      panic!("Stack Underflow!");
    }
    self.sp -= 1;
    self.pc = self.stack[self.sp as usize];
  }

  fn disassemble(&self, opcode: u16) -> String {
    let digit1 = (opcode & 0xF000) >> 12;
    let x = (opcode & 0x0F00) >> 8;
    let y = (opcode & 0x00F0) >> 4;
    let n = opcode & 0x000F;
    let nn = opcode & 0x00FF;
    let nnn = opcode & 0x0FFF;

    match (digit1, x, y, n) {
      (0, 0, 0xE, 0) => "CLS".to_string(),
      (0, 0, 0xE, 0xE) => "RET".to_string(),
      (1, _, _, _) => format!("JMP  {:03X}", nnn),
      (2, _, _, _) => format!("CALL {:03X}", nnn),
      (3, _, _, _) => format!("SE   V{:X}, {:02X}", x, nn), // Skip Equal
      (4, _, _, _) => format!("SNE  V{:X}, {:02X}", x, nn), // Skip Not Equal
      (5, _, _, _) => format!("SE   V{:X}, V{:X}", x, y),
      (6, _, _, _) => format!("LD   V{:X}, {:02X}", x, nn), // LoaD
      (7, _, _, _) => format!("ADD  V{:X}, {:02X}", x, nn),
      (8, _, _, _) => match n {
        0 => format!("LD   V{:X}, V{:X}", x, y),
        1 => format!("OR   V{:X}, V{:X}", x, y),
        2 => format!("AND  V{:X}, V{:X}", x, y),
        3 => format!("XOR  V{:X}, V{:X}", x, y),
        4 => format!("ADD  V{:X}, V{:X}", x, y),
        5 => format!("SUB  V{:X}, V{:X}", x, y),
        6 => format!("SHR  V{:X}", x),
        7 => format!("SUBN V{:X}, V{:X}", x, y),
        0xE => format!("SHL  V{:X}", x),
        _ => format!("UNKNOWN 8"),
      },
      (9, _, _, _) => format!("SNE  V{:X}, V{:X}", x, y),
      (0xA, _, _, _) => format!("LDI  I, {:03X}", nnn),
      (0xB, _, _, _) => format!("JP   V0, {:03X}", nnn),
      (0xC, _, _, _) => format!("RND  V{:X}, {:02X}", x, nn),
      (0xD, _, _, _) => format!("DRW  V{:X}, V{:X}, {:X}", x, y, n),
      (0xE, _, 0x9, 0xE) => format!("SKP  V{:X}", x),
      (0xE, _, 0xA, 0x1) => format!("SKNP V{:X}", x),
      (0xF, _, 0x0, 0x7) => format!("LD   V{:X}, DT", x),
      (0xF, _, 0x0, 0xA) => format!("LD   V{:X}, K", x),
      (0xF, _, 0x1, 0x5) => format!("LD   DT, V{:X}", x),
      (0xF, _, 0x1, 0x8) => format!("LD   ST, V{:X}", x),
      (0xF, _, 0x1, 0xE) => format!("ADD  I, V{:X}", x),
      (0xF, _, 0x2, 0x9) => format!("LD   F, V{:X}", x),
      (0xF, _, 0x3, 0x3) => format!("LD   B, V{:X}", x),
      (0xF, _, 0x5, 0x5) => format!("LD   [I], V{:X}", x),
      (0xF, _, 0x6, 0x5) => format!("LD   V{:X}, [I]", x),
      _ => format!("UNK  {:04X}", opcode),
    }
  }

  fn execute(&mut self, opcode: u16) {
    // dissect the opcode into 4 nibbles
    // Example: 0xD2F5
    // 4 bit integers dont exist
    let digit1: u8 = ((opcode & 0xF000) >> 12) as u8; // D
    let x: u8 = ((opcode & 0x0F00) >> 8) as u8; // 2
    let y: u8 = ((opcode & 0x00F0) >> 4) as u8; // F
    let n: u8 = (opcode & 0x000F) as u8; // 5
                                         // legitimate 8 bit integer
    let nn: u8 = (opcode & 0x00FF) as u8; // F5
    let nnn: u16 = opcode & 0x0FFF; // 2F5

    match (digit1, x, y, n) {
      // 0000: Nop (Do nothing)
      (0, 0, 0, 0) => return,

      // 00E0: Clear Screen
      (0, 0, 0xE, 0) => {
        self.display = vec![false; SCREEN_WIDTH * SCREEN_HEIGHT];
      }

      // 00EE: Return from Subroutine
      (0, 0, 0xE, 0xE) => {
        self.pop();
      }

      // 1NNN: Jump to Address NNN
      (1, _, _, _) => {
        self.pc = nnn;
      }

      // 2NNN: Call Subroutine at NNN
      (2, _, _, _) => {
        self.push(); // <--- This uses the push method!
        self.pc = nnn;
      }

      // 3XNN: Skip next instruction if VX == NN
      (3, _, _, _) => {
        if self.v_reg[x as usize] == nn {
          self.pc += 2;
        }
      }

      // 4XNN: Skip next instruction if VX != NN
      (4, _, _, _) => {
        if self.v_reg[x as usize] != nn {
          self.pc += 2;
        }
      }

      // 5XY0: Skip next instruction if VX == VY
      (5, _, _, 0) => {
        if self.v_reg[x as usize] == self.v_reg[y as usize] {
          self.pc += 2;
        }
      }

      // 6XNN: Set Register V[X] to NN
      (6, _, _, _) => {
        self.v_reg[x as usize] = nn;
      }

      // 7XNN: Add NN to Register V[X]
      (7, _, _, _) => {
        let vx = x as usize;
        // .wrapping_add prevents Rust from panicking if we go over 255
        self.v_reg[vx] = self.v_reg[vx].wrapping_add(nn);
      }

      // 8XYN: Arithmetic and Logic operations
      (8, _, _, _) => {
        let vx = x as usize;
        let vy = y as usize;

        match n {
          // 8xy0: Set Vx = Vy
          0 => self.v_reg[vx] = self.v_reg[vy],

          // 8xy1: Set Vx = Vx OR Vy (Bitwise OR)
          1 => self.v_reg[vx] |= self.v_reg[vy],

          // 8xy2: Set Vx = Vx AND Vy (Bitwise AND)
          2 => self.v_reg[vx] &= self.v_reg[vy],

          // 8xy3: Set Vx = Vx XOR Vy (Bitwise XOR)
          3 => self.v_reg[vx] ^= self.v_reg[vy],

          // 8xy4: Set Vx = Vx + Vy, set VF = carry
          4 => {
            // Rust's .overflowing_add() returns a tuple: (result, did_it_overflow)
            let (res, overflow) = self.v_reg[vx].overflowing_add(self.v_reg[vy]);
            self.v_reg[vx] = res;
            self.v_reg[0xF] = if overflow { 1 } else { 0 }; // VF acts as CARRY flag here
          }

          // 8xy5: Set Vx = Vx - Vy, set VF = NOT borrow
          // If Vx > Vy, then VF is set to 1, otherwise 0.
          5 => {
            let (res, borrow) = self.v_reg[vx].overflowing_sub(self.v_reg[vy]);
            self.v_reg[vx] = res;
            self.v_reg[0xF] = if !borrow { 1 } else { 0 };
          }

          // 8xy6: Set Vx = Vx SHR 1 (Shift Right)
          // We save the bit that is about to fall off into VF
          6 => {
            self.v_reg[0xF] = self.v_reg[vx] & 0x1;
            self.v_reg[vx] >>= 1;
          }

          // 8xy7: Set Vx = Vy - Vx, set VF = NOT borrow
          7 => {
            let (res, borrow) = self.v_reg[vy].overflowing_sub(self.v_reg[vx]);
            self.v_reg[vx] = res;
            self.v_reg[0xF] = if !borrow { 1 } else { 0 };
          }

          // 8xyE: Set Vx = Vx SHL 1 (Shift Left)
          // We save the top bit that is about to fall off into VF
          0xE => {
            self.v_reg[0xF] = (self.v_reg[vx] >> 7) & 0x1;
            self.v_reg[vx] <<= 1;
          }

          _ => { /* Unknown 8-series opcode */ }
        }
      }

      // 9XY0: Skip next instruction if VX != VY
      (9, _, _, 0) => {
        if self.v_reg[x as usize] != self.v_reg[y as usize] {
          self.pc += 2;
        }
      }

      // ANNN: Set Index Register I to NNN
      (0xA, _, _, _) => {
        self.i_reg = nnn;
      }

      // CXNN: Set VX to Random Number AND NN
      (0xC, _, _, _) => {
        let random_byte = (random() * 255.0) as u8;
        self.v_reg[x as usize] = random_byte & nn;
      }

      // DXYN: Draw Sprite
      (0xD, _, _, _) => {
        self.draw_sprite(x as usize, y as usize, n as u16);
      }

      // EX9E: Skip next instruction if Key stored in VX is PRESSED
      (0xE, _, 0x9, 0xE) => {
        let key = self.v_reg[x as usize] as usize;
        if self.keys[key] {
          self.pc += 2;
        }
      }

      // EXA1: Skip next instruction if Key stored in VX is NOT PRESSED
      (0xE, _, 0xA, 0x1) => {
        let key = self.v_reg[x as usize] as usize;
        if !self.keys[key] {
          self.pc += 2;
        }
      }

      // F-Series: Timers, Input, and Font Memory
      (0xF, _, 0x0, 0x7) => {
        // FX07: Set VX = Delay Timer
        self.v_reg[x as usize] = self.dt;
      }

      (0xF, _, 0x1, 0x5) => {
        // FX15: Set Delay Timer = VX
        self.dt = self.v_reg[x as usize];
      }

      (0xF, _, 0x1, 0x8) => {
        // FX18: Set Sound Timer = VX
        self.st = self.v_reg[x as usize];
      }

      (0xF, _, 0x1, 0xE) => {
        // FX1E: Add VX to Index Register (I += VX)
        self.i_reg = self.i_reg.wrapping_add(self.v_reg[x as usize] as u16);
      }

      (0xF, _, 0x0, 0xA) => {
        // FX0A: Wait for Key Press (Blocking)
        // If no key is pressed, we decrement PC to repeat this instruction again and again.
        let mut pressed = false;
        for i in 0..self.keys.len() {
          if self.keys[i] {
            self.v_reg[x as usize] = i as u8;
            pressed = true;
            break;
          }
        }
        if !pressed {
          self.pc -= 2; // "Redo" this instruction
        }
      }

      (0xF, _, 0x2, 0x9) => {
        // FX29: Set Index to the Sprite Location for Character in VX
        // Fonts are stored at the very start of RAM (0x0000). Each char is 5 bytes.
        // So 'A' (which is 0xA or 10) is at 10 * 5 = 50.
        let c = self.v_reg[x as usize] as u16;
        self.i_reg = c * 5;
      }

      (0xF, _, 0x3, 0x3) => {
        // FX33: Store BCD representation of VX
        // Takes the number in VX (say, 254) and splits it into 2, 5, 4
        // Stores them at I, I+1, I+2
        let mut value = self.v_reg[x as usize];

        // Ones place
        self.ram[self.i_reg as usize + 2] = value % 10;
        value /= 10;

        // Tens place
        self.ram[self.i_reg as usize + 1] = value % 10;
        value /= 10;

        // Hundreds place
        self.ram[self.i_reg as usize] = value;
      }

      (0xF, _, 0x5, 0x5) => {
        // FX55: Dump Registers V0-VX into memory starting at I
        for i in 0..=x {
          self.ram[self.i_reg as usize + i as usize] = self.v_reg[i as usize];
        }
      }

      (0xF, _, 0x6, 0x5) => {
        // FX65: Load memory starting at I into Registers V0-VX
        for i in 0..=x {
          self.v_reg[i as usize] = self.ram[self.i_reg as usize + i as usize];
        }
      }

      _ => {
        // Unknown opcode. Ideally we log this.
      }
    }
  }

  fn draw_sprite(&mut self, x_index: usize, y_index: usize, height: u16) {
    // 1. Get the starting coordinates from registers VX and VY
    let x_coord = self.v_reg[x_index] as usize % SCREEN_WIDTH;
    let y_coord = self.v_reg[y_index] as usize % SCREEN_HEIGHT;

    // 2. Set VF (Collision Flag) to 0
    self.v_reg[0xF] = 0;

    // 3. Loop through each ROW of the sprite (height)
    for row in 0..height {
      // Get the specific byte of pixel data from RAM
      let sprite_byte = self.ram[(self.i_reg + row) as usize];

      // 4. Loop through each BIT (pixel) in that byte (8 pixels wide)
      for col in 0..8 {
        let pixel_color = (sprite_byte >> (7 - col)) & 1;

        // If the sprite pixel is ON (1)
        if pixel_color == 1 {
          let target_x = x_coord + col;
          let target_y = y_coord + row as usize;

          // Check bounds just in case
          if target_x < SCREEN_WIDTH && target_y < SCREEN_HEIGHT {
            let index = target_x + target_y * SCREEN_WIDTH;

            // XOR Logic:
            // If Screen is ON and Pixel is ON -> Turn OFF (Collision)
            if self.display[index] {
              self.display[index] = false;
              self.v_reg[0xF] = 1; // Collision detected!
            } else {
              self.display[index] = true;
            }
          }
        }
      }
    }
  }

  pub fn keypress(&mut self, key_index: usize, pressed: bool) {
    if key_index < 16 {
      self.keys[key_index] = pressed;
    }
  }

  pub fn load_rom(&mut self, data: &[u8]) {
    let start_offset = 0x200; // 512
    let end_offset = start_offset + data.len();

    // Copy the JS data into the RAM starting at 512
    self.ram[start_offset..end_offset].copy_from_slice(data);
  }
}
