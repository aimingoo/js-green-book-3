// 将x声明为一个thenable对象
x = {then: function() { console.log('in thenable object..') }};

// 测试，p2是“返回的promise2”，且是未就绪的
p2 = Promise.resolve(x); // in thenable object..

// p2与x对象不是同一实例
console.log(p2 === x); // false