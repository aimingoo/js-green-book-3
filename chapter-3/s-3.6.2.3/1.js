// 元（元语言/元编程体系的基类型, v2.0）
class Meta extends null {
  constructor() {
    return Object.setPrototypeOf(class extends null {
      constructor() { 
        return Object.create(new.target.prototype);
      }
      // 使instanceof恢复到默认
      static [Symbol.hasInstance](obj) { 
        return Object.prototype.isPrototypeOf.call(this.prototype, obj);
      }
    }, new.target);
  }
  // 让元及其子类在instanceof运算中以自身作为运算元
  static [Symbol.hasInstance](obj) {
    return Object.prototype.isPrototypeOf.call(this, obj);
  }
}

// Meta的原型也应当是原子
Object.setPrototypeOf(Meta, null);