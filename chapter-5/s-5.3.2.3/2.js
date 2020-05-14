var obj = {
  MyClass: class {
    get value() {
      return 10;
    }
  }
}

// 注意，运算符“.”的优先级高于new
console.log((new obj.MyClass).value); // 10