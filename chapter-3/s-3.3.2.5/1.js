class MyClass extends Object {
  static superTag() {
    console.log(super.tag);
  }
}

Object.tag = "Object";

// 显示super tag
MyClass.superTag(); // 'Object'

// 重置MyClass的prototype，并导致super存取的结果变化
NewParent = new Function;
NewParent.tag = "A New Parent";
Object.setPrototypeOf(MyClass, NewParent);
MyClass.superTag(); // 'A New Parent'

// 直接作为函数调用，super是绑定的
foo = MyClass.superTag;
foo(); // 'A New Parent'
