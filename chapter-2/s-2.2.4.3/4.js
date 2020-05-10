// 剩余参数
function foo(x, y, ...z) {
  console.log(z)
}

foo('a', 'b', 'c', 'd', 'e'); // ["c", "d", "e"]