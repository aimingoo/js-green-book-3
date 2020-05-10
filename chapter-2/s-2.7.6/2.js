a = [ [][100] ]; 	// 第一个数组为空数组,第二个数为任意数值,都将得到 [ undefined ]
console.log(typeof a, a.length, a[0]);

a = [ [1,2,3][2] ];	// 第一个数组有三个元素,因此arr[2]是存在的，故而得到 [ 3 ]
console.log(typeof a, a.length, a[0]);

try {
  eval(`a = [ [][] ]`);     	// 第一个数组为空,是正常的;但第二个作为下标运算时缺少索引,故语法错
}
catch(e) {
  let firstLine = e => e.stack.split('\n')[0];
  console.log(firstLine(e));
}

a = [ []['length'] ]; // 第一个数组为空数组, 因此将返回它的长度。结果得到 [ 0 ]
console.log(typeof a, a.length, a[0]);