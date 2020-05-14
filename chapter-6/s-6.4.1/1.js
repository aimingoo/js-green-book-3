var aArray = ['a', 'b', 'c', 'd'];

// 显示true
console.log('1' in aArray);

// for...in列举元素0~3
for (var i in aArray) {
  console.log(i + '=> ' + aArray[i]);
}