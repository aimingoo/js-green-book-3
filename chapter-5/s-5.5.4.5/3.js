function myFunction(name) {
  return function() {
    return 'function ' + name +
      '()\n{\n  [custom function]\n}';
  }
}

// 任意对象
let aFunc = new Object;

// 显示一个定制的toString效果
aFunc.toString = myFunction('aFunc');
console.log(aFunc);