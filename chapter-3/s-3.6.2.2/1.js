// 元（元语言/元编程体系的基类型, v1.0）
class Meta extends null {
  constructor() {
    return Object.setPrototypeOf(class extends null {
      constructor() {
        return Object.create(new.target.prototype);
      }
    }, new.target);
  }
}

// Meta作为元编程模型的原子类型，...它的原型也应当是atom
Object.setPrototypeOf(Meta, null);