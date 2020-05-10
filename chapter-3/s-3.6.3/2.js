// npm install aimingoo/metameta
let { Meta } = require('@aimingoo/metameta'); 

// inject static method
//  - code from github repo: aimingoo/metameta
Meta.from = function(constructor) {
  return new this(Object.setPrototypeOf(class extends null{},
    this.isAtom(constructor) ? constructor : this.asAtom(constructor)));
};

// 创建原子
Objext = Meta.from(Object);
x = new Objext;
console.log(Meta.isAtom(x));
// 原本在Object()上的类方法，现在也变成了Objext中可用的
console.log(Objext.keys(x));
console.log(Object.getOwnPropertySymbols(x));

// 得到一个基于JavaScript基本的对象系统的、扩展的元编程模型
class MetaArray extends new Meta(Meta.from(Array)) {}
// 测试如下
arr = new MetaArray(1,2,3);
console.log(MetaArray.isArray(arr));
console.log(Array.prototype.join.call(arr));