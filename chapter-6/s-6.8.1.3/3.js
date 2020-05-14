// 基本实现：阶段3 
function DSL(environment, evaluator, parser) {
  var dsl = Weave.call(evaluator, /^/, Block(parser)+'\n\n');
  dsl = Scope(environment, dsl)
  return Owner(environment, dsl);
}