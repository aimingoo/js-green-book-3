// 传入undefined来使缺省参数生效
function foo(x='abc', y) {
  console.log([x, y])
}

foo(undefined, 'abc'); // abc,100