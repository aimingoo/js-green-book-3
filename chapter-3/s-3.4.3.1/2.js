// 类继承的实例：修改示例1的构造器声明部分
function Animal() {
  this.respire = function() {     // 交换氧气与二氧化碳
  }
}

// 示例: 重写构造器的方法会导致实例持有不同的方法(或函数)
var obj1 = new Animal();
var obj2 = new Animal();

// 显示值: false
console.log(obj1.respire === obj2.respire);

