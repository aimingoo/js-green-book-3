// 检测成员是否是重写的
var isRewrited = function(obj, key) {
  return obj.hasOwnProperty(key) && (key in Object.getPrototypeOf(obj));
}

// 检测成员是否是继承来的
var isInherited = function(obj, key) {
  return (key in obj) && !obj.hasOwnProperty(key);
}

// PART - 1
// 测试如下：

// 创建一个字符串对象的实例
var x = new String();

// 字符串（实例x）有一个名为charAt的属性，且它是继承来的
console.log(isInherited(x, 'charAt')); // true

// 字符串（原型）的charAt属性是自有的（不是继承来的）
console.log(String.prototype.hasOwnProperty('charAt')); //true
console.log(isInherited(String.prototype, 'charAt')); // false

// 字符串（实例x）重写了名为charAt的属性，这导致它不再是继承来的属性
x.charAt = new Function;
console.log(isRewrited(x, 'charAt')); // true
console.log(isInherited(x, 'charAt')); // false


// 在对象及其原型链上查找属性的属主对象
var getPropertyOwner = function f(obj, key) {
  return !obj ? null
    : obj.hasOwnProperty(key) ? obj
    : f(Object.getPrototypeOf(obj), key)
}

// PART - 2
// （续上例）

// 属性是重写的，
console.log(isRewrited(x, 'charAt')); // true

// 所以owner也是对象自身
console.log(getPropertyOwner(x, 'charAt') === x); // true

// 添加一个全新的属性
x.branew = 'Bran-new';

// 它不是继承来的
console.log(isInherited(x, 'branew')); // false

// 也没有更上层的属主
console.log(getPropertyOwner(Object.getPrototypeOf(x), 'branew')); //null
