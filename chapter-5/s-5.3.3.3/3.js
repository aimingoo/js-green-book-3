// 示例：可以用模板字符串来控制myFunc函数的动态生成
var name = 'aVaraintName';

var myFunc = new AsyncFunction('x', 'y', `
  var ${name} = x + y;
  console.log("calculated:", ${name});
  return {${name}};
`);