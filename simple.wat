(module
  (type (;0;) (func (param i32)))
  (type (;1;) (func))
  (type (;2;) (func (result f64)))
  (import "env" "table" (table (;0;) 2 anyfunc))
  (import "env" "memoryBase" (global (;0;) i32))
  (import "env" "tableBase" (global (;1;) i32))
  (import "env" "abort" (func (;0;) (type 0)))
  (func (;1;) (type 0) (param i32)
    nop)
  (func (;2;) (type 1)
    nop)
  (func (;3;) (type 1)
    get_global 0
    set_global 2
    get_global 2
    i32.const 5242880
    i32.add
    set_global 3)
  (func (;4;) (type 2) (result f64)
    i32.const 0
    call 0
    f64.const 0x0p+0 (;=0;))
  (global (;2;) (mut i32) (i32.const 0))
  (global (;3;) (mut i32) (i32.const 0))
  (global (;4;) i32 (i32.const 1))
  (export "__post_instantiate" (func 3))
  (export "_fibonacci" (func 1))
  (export "runPostSets" (func 2))
  (export "fp$_fibonacci" (global 4))
  (elem (get_global 1) 4 1))
