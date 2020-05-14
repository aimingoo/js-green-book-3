var str = 'abcde';

function newToString() {
  return 'hello, world!';
}

function func(x) {
  // 在这里, 如果x是对象则修改它的成员, 否则修改值类型包装的结果对象(并随后废弃该对象)
  x.toString = newToString;
}

// 试图显示'hello, world', 但实际仍然显示'abcde'
func(str);
console.log(str);