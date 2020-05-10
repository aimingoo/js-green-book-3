// 重写MetaClass
class MetaClass extends Meta {
  constructor(prototype) {
    super();
    if (! prototype) return;
    if (! Meta.isAtom(prototype)) throw new Error('Need a atom prototype');
    Object.setPrototypeOf(this.prototype, prototype);
  }
  // 元类/类类型
  static isClassOf(obj) {
    return obj instanceof this || obj.constructor instanceof this;
  }
}