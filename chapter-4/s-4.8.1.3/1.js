obj = {
  foo() {
    console.log(this.name);
  }
}

// 识别项1：需要识别this是否能调用foo
x = { ...obj };
x.foo();

// 识别项2：需要识别在foo()中对this.name的访问是否是私有的
x = {
  name = 'new name'; // 这里是假设的语法
  ["private aProp"] = 'private name'; // 这里是假设的语法
}
obj.foo.call(x);
