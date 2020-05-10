// file: test.mjs
import * as funcs from './funcs.mjs';
import {foo} from './funcs.mjs';

// test
console.log(funcs.foo()); // <- funcs.X的语法使foo()函数将funcs绑定为this
console.log(funcs.f2()); // <- 箭头函数总是使用词法作用域中的this而不受上述影响
console.log(foo()); // <- 这里会得到模块词法环境中的this值undefined，而非funcs

