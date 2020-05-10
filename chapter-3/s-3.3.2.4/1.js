// 示例1：假设子类试图实现父类defaultCount + 3
class MyObject {
  get defaultCount() {
    return 10;
  }
}

class MyObjectEx extends MyObject {
  get defaultCount() {
    // 使用super.defaultCount会访问到什么呢？
    return super.defaultCount + 3;
  }
}

// 测试如下

// 子类MyObjectEx的实例
console.log((new MyObjectEx).defaultCount); // 13

// 使用super引用所访问的属性
console.log(MyObject.prototype.defaultCount); // 10
