var message = "Hello world.";

// 在模板中引用变量
console.log(`The message is: ${message}`);

// 在模板中计算表达式
console.log(`The null is ${typeof null} type.`);

// 模板字面量和模板调用(template call)
foo = tpl=>console.log(typeof tpl, tpl instanceof Array, ref=tpl)
foo`xyz`

// 模板的内部格式
console.log(String.raw({raw: ['', ',\nworld']}, 'Hi'))

// (等义于)
foo = tpl => String.raw(tpl, 'Hi');
console.log(foo`${1},
world`);