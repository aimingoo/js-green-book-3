var data = 100;
var obj = {
  data: 100,
  get value() { return data },
  set value(newValue) { return data = newValue }
}
console.log(obj.data); // 100
console.log(obj.value); // 100

// 置值
obj.data = 200;
obj.value = 200;
console.log(obj.data); // 200
console.log(obj.value); // 200

// 冻结
Object.freeze(obj);
Object.isFrozen(obj); // true

// 数据属性已置为只读，赋值运算无效
obj.data = 300;
console.log(obj.data); // 200

// 不影响存取属性，赋值成功
obj.value = 300;
console.log(obj.value); // 300

