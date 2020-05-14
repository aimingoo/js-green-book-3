// 对于本示例来说`context`是当前上下文
// （注：上例中的`context`刚刚被pushContext()）
currentContext = () => context;

// 示例用的evaluate()
function evaluate(ast, ...args) {
  // 从ast中得到具体的行为和相关操作数
  var stat = ast.program.body[0]; // "type": "ExpressionStatement"
  var {left, operator, right } = stat.expression; // "type": "BinaryExpression"

  // ECMAScript规范的环境工具
  //  - Get Reference by name，参见ES7：8.1.2.1 GetIdentifierReference()
  var $R = Environment.GetIdentifierReference.bind(Environment, realm);
  //  - Get Value from Reference，参见ES7：6.2.4.8 GetValue()
  var $V = Environment.GetValue.bind(Environment, realm);

  // 当前上下文
  var lexEnv = currentContext().lexicalEnvironment;
  if (operator === '+') {
     let xRef = $R(lexEnv, left.name);
     let yRef = $R(lexEnv, right.name);
     return $V(xRef) + $V(yRef); // a evaluation/operation process
  }
}