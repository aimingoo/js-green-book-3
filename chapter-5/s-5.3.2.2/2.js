// 示例5

// 在生成器函数内使用this
var obj = new Object;
function *f() {
  console.log("this is <obj>:", this===obj);
}

// 测试，传入obj作为this
var tor = f.call(obj);
tor.next(); // this is <obj>: true

// 作为一般函数调用，没有this传入（默认指向global）
var tor2 = f();
tor2.next(); // this is <obj>: false