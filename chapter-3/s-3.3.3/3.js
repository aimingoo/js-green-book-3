// （或者，）如果没有用extends声明父类
class MyClass {
  constructor(){}
}

// 类作为标识符在实质上就是“一个引用了该构造方法的函数”
console.log(MyClass === MyClass.prototype.constructor); // true
