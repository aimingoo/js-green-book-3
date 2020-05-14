/**
 * 1. 简单的解析器与执行器
 */
function myParser(){
  arguments[0] = Block(arguments[0]);
}

function myEval() {
  return eval(arguments[0]);
}

/**
* 2. 构造一个执行环境
 */
var Env = {
  language: 'langg',
  max: 100,
  min: -3,
  calc: function(adj) {
    return adj * 2
  },
  show: function(msg) {
    console.log(msg)
  }
} 

/**
 * 3. 构建一个新的dsl语言
 */
var myEnv = Unique(Env);
dsl = DSL(myEnv, myEval, myParser);

/**
 * 4. 用这个dsl执行代码
 */
dsl(function() {
  show(min+max);
  show(calc(min+max));
});