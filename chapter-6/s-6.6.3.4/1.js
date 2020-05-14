var global_f = f;
function f() {
  var x = 100;
  eval('function f() {}; var x = x * 2;');
  console.log(f === global_f);  // false
  console.log(x); // 200
}

f();