# Metameta

Metameta is meta core and meta-class programming framework.


- [Usage](#usage)
- [The Meta](#the-meta)
  * [atom](#atom)
  * [meta/Atom](#metaatom)
  * [Meta](#meta)
  * [MetaClass](#metaclass)
  * [MetaObject](#metaobject)
- [Shadow meta](#shadow-meta)
- [More testcases](#more-testcases)
- [Interface](#interface)
- [History](#history)



## Usage

```bash
# install from npm
> npm install @aimingoo/metameta

# OR, install from github
> npm install aimingoo/metameta
```

And use in javascript

```javascript
// Meta core
var {Meta, MetaClass, MetaObject} = require('@aimingoo/metameta');

// Helper methods, all home object safed.
var {isMeta, isAtom, asAtom} = Meta;

// learn case
var Objext = Meta.from(Object);
console.log(Objext.keys(new Objext)); // []
console.log(Meta.isAtom(new Objext)); // true
```



## The Meta

### atom

The **atom** is smallest unit of pure object in javascript, it's object but not inherited from Object(). An atom is a object. `null`, `Object.prototype`, `arguments` and `namespace` are atom objects in javascript language.

```bash
> Meta.isAtom(null);
true

> Meta.isAtom(Object.prototype)
true
```



### meta/Atom

atom created by meta, so the **meta** is constructor of atoms, with **Atom()** on the concept is the same. meta is base unit of Meta system, and is function always.

```bash
# meta is same of Atom()
> meta = new Meta; 

# atom created
> atom = new meta;

# check is atom
> Meta.isAtom(atom);
true

# check is object
> typeof atom;
'object'
```



### Meta

Meta is meta's class.

```javascript
// extend
class MetaX extends Meta {};
var meta = new MetaX;

// meta is atom too.
console.log(Meta.isAtom(new Meta)); // true
console.log(Meta.isAtom(meta)); // true

// instance from meta, check inheritance
var x = new meta;
console.log(x instanceof meta); // true
console.log(x instanceof Meta); // true
console.log(x instanceof MetaX); // true
// another
class MetaX2 extends Meta {};
console.log(x instanceof MetaX2); // false
```



### MetaClass

MetaClass is root of Meta-classes programming system.

```javascript
// meta-classes
class MetaClassEx extends MetaClass {
    // ...
}

// extend meta system
//  NOTE: must extends from a meta/Atom
class AtomObjects extends new MetaClassEx() {
    // ...
}

// check
console.log(MetaClass.isClassOf(MetaClassEx)); // true
console.log(MetaClassEx.isClassOf(AtomObjects)); // true
console.log(MetaClassEx.isClassOf(new AtomObjects)); // true
// another
console.log(MetaClassEx.isClassOf(new MetaObject)); // false
```



### MetaObject

MetaObject is a meta of MetaClass, and is a Class/Atom-constructor of atoms.

```javascript
// MetaObject is defined in metameta
var obj = new MetaObject;
console.log(Meta.isAtom(obj)); // true

// extend object system
class MetaObjectEx extends MetaObject{}

// create atom
var x = new MetaObjectEx;

// check
console.log(MetaClass.isClassOf(MetaObject)); // true
console.log(MetaClass.isClassOf(MetaObjectEx)); // true
console.log(MetaClass.isClassOf(x)); // true

// check in pure javascript
console.log(x instanceof MetaObject); // true
console.log(x instanceof MetaObjectEx); // true
console.log(x instanceof MetaObject); // true
console.log(x instanceof MetaClass); // true
console.log(x instanceof Meta); // true

// more
var isPrototypeOf = (...args) => Object.prototype.isPrototypeOf.call(...args);
console.log(isPrototypeOf(MetaObject, MetaObjectEx)); // true
console.log(isPrototypeOf(MetaClass, MetaObject)); // false
console.log(isPrototypeOf(MetaClass, MetaObjectEx)); // false
```



## Shadow meta

A shadow is meta from native constructor.

```javascript
// shadow from native-constructor
var Objext = Meta.from(Object);

// shadow is meta
var x = new Objext;
console.log(Meta.isAtom(x)); // true

// shadow has static methods from source
console.log(Objext.keys(x)); // []
```



## More testcases

```bash
# pull source
> git clone https://github.com/aimingoo/metameta
> cd metameta
> npm install

# test
> npm test

# coverage
> npm -g install istanbul
> npm run coverage
```



## Interface

* Meta's Class methods

    ```javascript
    // Return a object is atom object
    // @param {object|function} - a object
    Meta.isAtom(x)

    // Return a new atom/Atom, it's proxy of x, and prototype by base.
    // @param {object}[object] - a atom base another atom object
    // @param {function}[function=Atom] - a meta base meta/Meta/Atom...
    Meta.asAtom(x, base)

    // Return a class is Meta
    // @param {function} - a class
    Meta.isMeta(cls)

    // Return a shadow meta for native-constructor
    // @param {function} - a native constructor
    Meta.from(constructor)
    ```

* MetaClass's Class methods

    ```javascript
    // Return the class is base of x
    // @param {object} - is instance of class
    // @param {function} - is sub-class of class
    MetaClass.isClassOf(x)
    ```

* extends from Meta

    ```javascript
    class MetaX extends Meta {}
    ```

* meta's extends

    ```javascript
    // Meta-classes programming framework based
    class X extends new MetaClass {}

    // OR
    class X extends new MetaX{}
    ```



## History

```
2018.08.17 - v0.9.1 released, happy Chinese traditional valentine's day.
```

