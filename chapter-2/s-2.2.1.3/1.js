var str = 'abcde';
var obj = new String(str);

function newToString() {
  return 'hello, world!';
}
function func(val) {   val.toString = newToString;
}

// 示例1：传入值
func(str);
console.log(str); // 'abcde'

// 示例2：传入引用
func(obj);
console.log(String(obj)); // specify format by console.log
