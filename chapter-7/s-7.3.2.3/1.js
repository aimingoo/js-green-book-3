// 注意x/x2必须是Promise或其子类的实例
let Thenabled = Promise.prototype.then;

x = Promise.resolve(100);
p = new Promise(Thenabled.bind(x));

// OR
class MyPromise extends Promise {};
x2 = MyPromise.resolve(100);
p2 = new Promise(Thenabled.bind(x2));

// 创建一个Promise并交出它的置值器
var internal_handles; 
p3 = new Promise((...args) => internal_handles = args);

// x3是被动态绑定的对象，可以是任意Promise或其子类的实例
x3 = Promise.resolve(100);

// 其他风格的异步过程
setTimeout(Thenabled.bind(x3, ...internal_handles), 1000);

// 当x3就绪时, p3也就就绪了
p3.then(console.log);
