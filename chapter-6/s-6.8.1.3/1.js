// 基本实现：阶段1 - framework only
function DSL(environment, /* ... */) {
  var dsl = function() { /* ... */ }
  dsl = Scope(environment, dsl)
  return Owner(environment, dsl);
}