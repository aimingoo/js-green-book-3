var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

require = require("@std/esm")(module,{"esm":"mjs"});

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  it('Some features for imported name at local', ()=> {
    // 本地名字是只读和不可重新声明的
    expect(()=>require('../test.mjs')).be.throw(TypeError);
  });

  fancy.stdout().stderr().
  it('To access `this` in module\'s scope', output => {
    console.log = global_console_log; // reset default console.log
    // 在模块的词法作用域中访问this引用时，总是得到undefined值
    expect(()=>require('../test2.mjs')).not.be.throw();

    let output_stdout = output.stdout.split("\n");
    output_stdout.pop(); // a empty line
    let line2 = output_stdout.splice(1,1); // remove a line
    expect(line2).to.be.match(/^\{.*\}$/); // a object, it's namespace `funcs`
    expect(output_stdout).to.be.eql([
      undefined,  // in funcs.mjs, `console.log(this);`
      //...,      // in test2.mjs, `console.log(funcs.foo());` **REMOVED**
      undefined,  // in test2.mjs, `console.log(funcs.f2());`
      undefined   // in test2.mjs, `console.log(foo());`
    ].map(x=>String(x)));
  });
});