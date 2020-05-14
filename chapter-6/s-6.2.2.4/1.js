// 在类声明中重写原型方法
class MyObject extends Object {
  toString() {
    return 'nothing'
  }

  valueOf() {
    return 0;
  }
}

// 在Node.js中，console.log()总是尝试取valueOf()值
//  (*) 这是宿主的行为，不同的宿主可能并不一致
var x = new MyObject;
console.log(x);

// “+”运算在这里预期以数值运算，因此调用valueOf()是“+”运算的行为
//  (*) 这是该运算符的标准行为，是受ECMAScript规范约定的
console.log(+x);
