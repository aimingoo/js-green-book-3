function fsWatch(filename, options, listener) {
  if (arguments.length != fsWatch.length) {
    throw new Error('need ' + fsWatch.length + ' parameters');
  }
  // ...
}

// 属性length记录函数声明时的形式参数个数
console.log(fsWatch.length); // 3

