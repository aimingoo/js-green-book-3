// super作用于对象方法的函数作用域中
var obj = {
  foo() {
    return super.x;
  }
};

// super是“类作用域”的子级作用域
class ObjectEx { // 类作用域
  foo() {
    return super.toString();
  }
}