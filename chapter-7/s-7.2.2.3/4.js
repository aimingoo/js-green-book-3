var x = new Object;
var p3 = Promise.resolve(x);

// 测试1：p3所代理的值被传递
p5 = p3.finally(value => {
  console.log(typeof value); // undefined
  return 100; // onFinally()中的返回值被忽略
});

p5.then(value => {
  console.log("value saved: ", value === x);
});
