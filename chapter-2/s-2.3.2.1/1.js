var obj, str = 'abcdef';
var obj1 = new String(str);
var obj2 = obj = new String(str);

// 返回false
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

// 返回true
console.log(obj == obj2); // true
console.log(obj === obj2); // true

// NaN不等于自身
console.log(NaN==NaN, NaN===NaN, NaN!=NaN, NaN!==NaN); // false false true true

// 符号可以转换为true，但不等值于true
console.log(Boolean(Symbol()), !Symbol(), Symbol()==true, Symbol()===true); // true false false false

// 即使字面量相同的引用类型，也是不严格相等的
console.log({}==={}, /./===/./, function(){} === function() {}); // false false false 

