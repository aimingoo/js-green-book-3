// 然后我们尝试用异步函数来实现它
// 异步的foo()
async function foo([x]) {
  console.log(x);
}

// 调用异步foo()并不会导致任何异常
p = foo();

// 响应.catch()以观察rejected的异常对象
//（使用void是避免在控制台输出返回的promise）
p.catch(console.log); // TypeError: Cannot read property ...