// 表现2：super指向父类
class ObjectEx {
  show() {
    console.log(200);
  }
}

class ObjectEx2 extends ObjectEx {
  show() {  // 重写show方法
    super.show();  // 调用父类的show()方法
  }
}

// test
(new ObjectEx2).show(); // 200