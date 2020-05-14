// 示例3（保留参数num仅是为了和上例进行对比）
var msg = (function myFunc(num) {
  return myFunc = typeof myFunc;
})(10) + ", and upvalue's type is: " + typeof myFunc;


// 输出结果表明myFunc在表达式中是undefined的
console.log(msg);