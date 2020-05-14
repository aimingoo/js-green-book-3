// 示例对象
obj = {
  value: 100
}

function myCalc(obj) {
  //...
  obj.value = 2 * obj.value;
}
// 一般的代码风格
myCalc(obj);
console.log(obj.value);

// 某个函数式风格的计算过程 
// （计算值，而不是操作对象属性或对象本身）
function myCalc2({value}) {
  return value*2;
}

// 输出: 400
console.log(myCalc2(obj));
