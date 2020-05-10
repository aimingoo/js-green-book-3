class MetaList extends Meta {
  push() {
    console.log('prototype method in MetaList.');
  }
}

class MetaListEx extends MetaList {
  push() {
    super.push();
    console.log('prototype method in MetaListEx.');
  }
}

class ListObject extends new MetaClass(MetaListEx.prototype) {
  push() {
    super.push();
    console.log('method in ListObject.');
  }
}

// 测试如下

// 可以继承类类型中的原型方法
var list = new ListObject();
list.push();

// 实例与类类型没有继承关系
console.log(list instanceof ListObject); // true
console.log(list instanceof MetaListEx); // false

// 类与它被构建时传入的原型（的类）没有继承关系
console.log(ListObject instanceof MetaClass); // true
console.log(ListObject instanceof MetaListEx); // false
