function myFunction(name) {
  var context = [
    "return 'function ", name, "()\\n",
    "{\\n",
    "  [custom function]",
    "\\n}'"
  ];
  return new Function(context.join(''));
}

function aFunc() {
  //...
  //...
  //...
}

// 显示默认的toString效果
console.log(aFunc);

// 显示一个定制的toString效果
aFunc.toString = myFunction('aFunc');
console.log(aFunc);