function MyObject() {}
MyObject.prototype.value = 100;

// 该成员继承自原型，且未被重写，删除返回true
// 由于delete操作不对原型产生影响，因此obj1.value的值未发生变化
var obj1 = new MyObject();
console.log( delete obj1.value ); // true
console.log( obj1.value ); // 100

// 尝试删除Object.prototype，该成员禁止删除, 返回false
console.log( delete Object.prototype ); // false
