// 字符串作yield运算
function* foo() {
  yield* 'string'
}
console.log(foo().next());
