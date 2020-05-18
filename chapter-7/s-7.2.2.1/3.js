// 例3：尝试输出rejected reason
var x = new Object;
var err = (reason)=>console.log('REJECTED reason x: ', reason === x);

// 得到一个rejected promise
var p = Promise.reject(x);  // reason is x

// 尝试resolve它
//  - 隐含了p2 = Promise.resolve(p)和 p3 = p2.then(..)
Promise.resolve(p).then(console.log).catch(err); // REJECTED reason x: true