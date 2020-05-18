// 模拟效果
onFinally = () => {
  try {
    return f2();
  }
  catch(e) {
    return Promise.reject(e);
  } 
};

// ECMAScript处理onFinally时的特殊逻辑
thenFinally = (x) => {
  var result = onFinally(); // 模拟调用f2()并返回result的过程
  var p3 = Promise.resolve(result); // result可能是值或Promise对象
  var valueThunk = ()=>x; // 忽略result，返回x
  return p3.then(valueThunk); // 在Then链上返回
};


catchFinally = (reason) => {
  var result = onFinally(); // 模拟调用f2()并返回result的过程
  var p3 = Promise.resolve(result); // result可能是值或Promise对象
  var thrower = ()=> { throw reason }; // 将reason作为异常抛出
  return p3.then(thrower); // 在Then链上返回
};

// 如下代码相当于：p2.finally(f2)
p3 = p2.then(thenFinally, catchFinally);