// (引用自“示例2”)
class MyObject {
  static get defaultCount() {
    return 10;
  }
}

// 对于对象me来说，得到构建它的类（父类）
function PARENT(me) {
  return Object.getPrototypeOf(me).constructor;
}

// 示例3：使用PARENT()函数
class MyObjectEx2 extends MyObject {
  static get defaultCount() {
    return super.defaultCount + 3
  }
  printMyCount() {
    console.log(this.count || PARENT(this).defaultCount)
  }
}

// 测试
var obj = new MyObjectEx2();
obj.printMyCount();  // 显示：13
