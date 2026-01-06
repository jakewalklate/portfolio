use wasm_bindgen::prelude::*;

const SCREEN_WIDTH: usize = 64;
const SCREEN_HEIGHT: usize = 32;
const RAM_SIZE: usize = 4096; // 4KB of RAM
const NUM_REGISTERS: usize = 16; // V0 through VF
const STACK_SIZE: usize = 16; // How many function calls deep we can go
const KEY_COUNT: usize = 16;

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
}

#[wasm_bindgen]
impl Chip8 {
  #[wasm_bindgen(constructor)]
  pub fn new() -> Chip8 {
    Chip8 {
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
    }
  }

  // We'll call this from JavaScript 60 times a second
  pub fn tick(&mut self) {
    // 1. Fetch
    let opcode = self.fetch();

    // 2. Decode & Execute
    self.execute(opcode);

    // 3. Update Timers (Logic later)
    self.update_timers();
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
      },

      // 00EE: Return from Subroutine
      (0, 0, 0xE, 0xE) => {
        self.pop();
      },

      // 1NNN: Jump to Address NNN
      (1, _, _, _) => {
        self.pc = nnn;
      },

      // 6XNN: Set Register V[X] to NN
      (6, _, _, _) => {
        self.v_reg[x as usize] = nn;
      },

      // 7XNN: Add NN to Register V[X]
      (7, _, _, _) => {
        let vx = x as usize;
        // .wrapping_add prevents Rust from panicking if we go over 255
        self.v_reg[vx] = self.v_reg[vx].wrapping_add(nn);
      },

      // ANNN: Set Index Register I to NNN
      (0xA, _, _, _) => {
        self.i_reg = nnn;
      },

      // DXYN: Draw Sprite
      (0xD, _, _, _) => {
        self.draw_sprite(x as usize, y as usize, n as u16);
      },

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
