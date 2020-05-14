// 一个简单执行栈的实现（参见"步骤3：在realm装载执行过程"来处理来创建和使用`context`）
// （注：`context`是在6.8.2.4小节之"步骤2：向执行引擎推入上下文”中添加到realme中的）
// （注：evaluator()需要currentContext来与引擎实现者交换"执行过程"中的信息）
let ContextStack = [context];
let currentContext = () => ContextStack[ContextStack.length-1];

// （注：evaluator()需要currentContext来与引擎实现者交换"执行过程"中的信息）
function DSL(environment, evaluator, parser) {
  return function(srcText) {
    let defOptions = {filename: "", sourceType: "script"};
    let ast = parser(srcText, defOptions);
    return evaluator(ast, ast.IsStrict);
  }
}