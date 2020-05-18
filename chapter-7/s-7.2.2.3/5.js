var x = new Object;
var p3 = Promise.resolve(x);

// 测试2：p3所代理的值被覆盖
p5 = p3.finally(() => {
  return Promise.reject("finally rewrite"); // 异常或rejected值
})

p5.catch(reason => {
  console.log(`value overrided: rejected, and reason is <${reason}>`);
}); 
