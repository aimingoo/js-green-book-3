/**
 * NOTE: ...将在“4.8 私有属性与私有字段的纷争”详细讨论
**/

class MyObject {
  private x = 100;  // 声明“对象的”私有属性
  get x() {
    return (private this).x;  // 访问该对象的私有属性
  }
}

var x = new MyObject; // x是全局环境中的对象
console.log(x.x); // x.x是访问对象的公开属性