// =====================================================================================
// Metameta v0.9.1
// Author: aiming@gmail.com
// Copyright (c) 2018.08
//
// Metameta is meta core and meta-class programming framework.
//
// Usage:
//  var {Meta, MetaClass, MetaObject} = require('metameta');
//  var Atom = new Meta(), atom = new Atom();
//  console.log(Meta.isMeta(Meta));    // true
//  console.log(Meta.isMeta(Atom));    // false
//  console.log(Meta.isAtom(atom));    // true
//  console.log(atom instanceof Atom); // true
//  console.log(atom instanceof Meta); // true
//
// Other:
//  > Objext = Meta.from(Object);
//  > Objext.keys(new Objext);
//  []
// =====================================================================================

// atom types
// (OR: const atomTypes = new Set(['object', 'function']); )
const atomTypes = { has(type) { return type == 'object' || type == 'function' } };
const metaAtom = Object.create(null);

// Atom() for meta system
class Atom extends null {
  constructor() {
    return Object.create(new.target.prototype);
  }
}

// Meta's super
class MetaMeta extends null {
  constructor(base) {
    return Object.setPrototypeOf(class extends new.target{}, base);
  }
  static isAtom(x) {
    return atomTypes.has(typeof x) && !Object.prototype.isPrototypeOf(x);
  }
}

// As atom
Object.setPrototypeOf(Atom, null);
Object.setPrototypeOf(MetaMeta, metaAtom);

// Meta with helper methods
class Meta extends MetaMeta {
  constructor(base) {
    super((typeof base == 'function' && MetaMeta.isAtom(base)) ? base : Atom);
  }
  static from(constructor) {
    // Result isn't Meta, it's a meta/AtomObject and static methods base or inhterited from source constructor
    return new this(Object.setPrototypeOf(class extends null{},
      this.isAtom(constructor) ? constructor : this.asAtom(constructor)));
  }
  static asAtom(x, base) {
    base = super.isAtom(base) ? base : null;
    return new Proxy(x, { getPrototypeOf() { return base } });
  }
  static isMeta(cls) {
    return Object.prototype.isPrototypeOf.call(metaAtom, cls) && super.isAtom(cls.prototype);
  }
}

// Meta - meta class system
class MetaClass extends Meta {
  static isClassOf(x) {
    return this.isAtom(x) && (x instanceof this || x.prototype instanceof this);
  }
}

// Meta - atom object system
// (MetaObject isn't Meta, it's a meta/AtomObject and static methods is empty set)
class MetaObject extends new MetaClass {}

module.exports = {Meta, MetaClass, MetaObject};