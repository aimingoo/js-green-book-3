// 元（元语言/元编程体系的基类型, v2.0+）
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

  // 元
  //  - Meta派生的所有类类型（或Meta的子类）
  static isMeta(obj) {
    // return obj instanceof Meta && !(obj.prototype instanceof Meta);
    return obj instanceof Meta && obj.prototype instanceof Meta;
  }

  // 原子对象
  //  - Meta是原子对象，反之则不一定
  static isAtom(obj) {
    return !(obj instanceof Object) &&
       ['object', 'function'].includes(typeof obj);
  }
}

// Meta的原型也应当是原子
Object.setPrototypeOf(Meta, null);
// 强制Meta.prototype的原型指向Meta
//  - 这是一种旧式的风格，在@aimingoo/metameta被废弃
Object.setPrototypeOf(Meta.prototype, Meta);

// 类类型是类的父类，也是所有该类实例的祖先类
class MetaClass extends Meta {
  // 元类/类类型
  static isClassOf(obj) {
    return obj instanceof this || obj.constructor instanceof this;
  }
}