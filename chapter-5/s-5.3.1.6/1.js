// 在foo()中，参数v1~v3是有意义的，但在调用foo2.apply()时可以直接使用arguments
function foo(v1, v2, v3, name) {
  // ...
  return foo2.apply(this, arguments);
}

// 忽略其他参数
function foo2(_, _, _, name) {
  // ...
}