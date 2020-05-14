var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('The `length` property for typed array', ()=> {
    // 在对象及其原型链上查找属性的属主对象
    var getPropertyOwner = function f(obj, key) {
      return !obj ? null
        : obj.hasOwnProperty(key) ? obj
        : f(Object.getPrototypeOf(obj), key)
    }

    // 创建类型化数组
    var typedArr = new Int32Array;

    // length不是类型数组的自有属性
    expect(typedArr.hasOwnProperty('length')).to.be.false; // false

    // 取原型, 该值应等于Object.getPrototypeOf(Int32Array.prototype)
    var p = getPropertyOwner(typedArr, 'length');

    // 查看属性描述符
    expect(Object.getOwnPropertyDescriptor(p, 'length')).to.include({
      // get: [Function: get length],
      set: undefined,
      enumerable: false,
      configurable: true
    });
  });

  it('Manual calculation lenth of typed array', ()=> {
    // 创建类型化数组
    var typedArr = new Int32Array(10);

    // 取类型的元素长度
    var elementSize = (new typedArr.constructor(1)).buffer.byteLength;

    // 计算长度(计算值）
    expect(typedArr.buffer.byteLength / elementSize).to.be.equal(10); // length: 10

    // 属性值
    expect(typedArr.length).to.be.equal(10); // 10
  });
});