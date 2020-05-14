/**
 * 示例1：在参数中使用表达式时的求值规则
 */

// print()只接受一个参数
function print(msg) {
  console.log(msg);
}

var i = 100;
// case-1
print(i+=20, i*=2, 'value: '+i);
// case-2
print(i);