// 显示类型object，null是一个属于对象类型的对象
console.log(typeof null);

// null可被列举属性
var num = 0;
for (var propertyName in null) {
  num++;
  console.log(propertyName);
}

// 显示值0
console.log(num);
