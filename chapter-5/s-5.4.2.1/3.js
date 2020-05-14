function foo(tpl, ...values)  {
  console.log(tpl); // ["try call ", "."]
  console.log(values[0]); // "foo"
}

// 将foo()函数作为模板处理函数调用
foo`try call ${foo.name}.`;
