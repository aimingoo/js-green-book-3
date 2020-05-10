// 示例 1
class MyObject {
  static showMe() {
    console.log("我是：" + super.toString());
  }
}

MyObject.showMe();