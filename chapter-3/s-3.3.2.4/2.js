// 示例2：显式引用类名
class MyObject {
  static get defaultCount() {
    return 10;
  }
}

//子类实现父类defaultCount + 3
class MyObjectEx extends MyObject {
  static get defaultCount() {
    return super.defaultCount + 3; 
  }
  printMyCount() { // 访问当前类的静态属性
    console.log(this.count || MyObjectEx.defaultCount)
  }
  printMyCount2() { // 或直接访问父类的静态属性
    console.log(this.count || (MyObject.defaultCount+3))
  }
}

// 示例
(new MyObjectEx).printMyCount(); // 13
