// eval间接调用的示例
var exec = eval;
var f = ()=>eval;

// 1. eval来自对“单值表达式exec”的运算
exec('console.log("indirect call")');

// 2. eval来自函数调用的返回
f()('console.log("indirect call")');

// 3. eval来自call()方法中对eval的引用
eval.call(null, 'console.log("indirect call")');

// 4. eval来自逗号连续运算表达式（以及其他表达式）的求值
(0, eval)('console.log("indirect call")');

