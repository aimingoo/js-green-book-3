// 在剩余参数中使用模板
function foo(x, y, ...[m, n]) {
  console.log(m)
}

foo('a', 'b', 'c', 'd', 'e'); // 'c'