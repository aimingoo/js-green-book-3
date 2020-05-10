function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

// 以下为“类字段”提案的语法
class MyClass {
  constructor() {
    _data.set(this, {
      writable: true,
      value: 100
    });
  }

  // 位置1
  foo() {
    console.log(_classPrivateFieldGet(this, _data)); // 位置2
  }

} // test


var _data = new WeakMap();

new MyClass().foo();