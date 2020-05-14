function MyObject() {
  this = null;
}

// 以下代码将产生异常
this = null;
new MyObject();
