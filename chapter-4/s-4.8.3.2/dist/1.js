function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

class MyClass {
  constructor() {
    _x.set(this, {
      writable: true,
      value: 100
    });
  }

  // 公开#x的置值器
  set x(v) {
    _classPrivateFieldSet(this, _x, v);
  } // 其他使用#x的方法


  usingPrivateX() {
    console.log(_classPrivateFieldGet(this, _x));
  }

}

var _x = new WeakMap();

class MyClassEx extends MyClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "x", 200);
  }

}

let obj1 = new MyClass();
obj1.x = 200;
obj1.usingPrivateX(); // 200

let obj2 = new MyClassEx();
console.log(obj2.x); // 200

obj2.usingPrivateX(); // 100