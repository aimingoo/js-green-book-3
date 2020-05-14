// prepack中实现的执行过程
let evaluators = require(`${lib}/evaluators`);

// 步骤3：在realm中装载执行过程
//  - （续“6.8.2.4　执行前的准备工作”小节之执行步骤）
for (let name in evaluators) realm.evaluators[name] = evaluators[name];

// 步骤4：一个可用的evaluate的实现
function evaluate(ast, strictCode) {
  let {lexicalEnvironment, realm} = currentContext();
  let evaluator = realm.evaluators[ast.type];
  if (!evaluator) throw new TypeError(`Unsupported node type ${ast.type}`);

  return evaluator(ast, strictCode, lexicalEnvironment, realm);
}