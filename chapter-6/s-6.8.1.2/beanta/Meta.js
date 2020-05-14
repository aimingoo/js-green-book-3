/**
  Qobean's meta utilities base on ES5
 */

/**
 * A utility, get function's body context(code snippet)
 */
function Block(func) {
  var r = /\{(.*)\}[^}]*$/m, srcText = func.toString();
  return (srcText.match(r)||[,srcText])[1];
}

/**
 * Weave system
 *  if you want update again, then you need weaving, weaving and weaving... else
 *  rewrite once. if function need upvalue, can't weaving it! Weave() will change
 *  function's scope thians.
 */
function Weave(where, code) {
  let args = (this.toString().match(/^[^\(]*\(([^\)]*)\)/)||[])[1];
  return Function(args, Block(this).replace(where, code));
}

// Scope system
//  - get a function by <code>, the function running in a specify scope for the <obj>
function Scope(obj, code) {
  switch (obj) {
    case undefined:
    case null: return Function(code, 'anonymous');  // dynamic function running in global
    default:
      with (obj) return function() {
        return eval(Block(code));
      };  // direct eval running in scope
      // start vm???
  }
}

// code from {QoBean}\Meta.js
function Owner(owner, aFunction) {
  return (aFunction || this).bind(owner);
}

// get a unique object from a 'obj'
//  -  clone unique object.
var Unique = function(f) {
  return function(obj, func, args) {
    f.prototype = obj;
    return func ? func.apply(new f, args) : new f;
  }
}(new Function);