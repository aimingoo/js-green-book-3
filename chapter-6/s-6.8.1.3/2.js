// 基本实现：阶段2 
function DSL(environment, evaluator, parser) {
  function dsl(srcText) {
    srcText = parser(srcText);
    evaluator(srcText);
  }
  dsl = Scope(environment, dsl)
  return Owner(environment, dsl);
}