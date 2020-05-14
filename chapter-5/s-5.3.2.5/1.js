// 示例9

// 本示例用于展示arrowFunc()中可访问的this引用
function foo() {
  var arrowFunc = ()=>this.name;
  var obj2 = {name: 'me'};
  console.log('call: ', arrowFunc.call(obj2));
  console.log('bind: ', arrowFunc.bind(obj2)());
}

var obj = {name: 'object <obj>'};

// 测试如下
// call foo() and bind `this` to <obj>
foo.call(obj);