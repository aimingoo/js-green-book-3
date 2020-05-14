var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("Hi: 100\n");
  });

  it('More checks ...', ()=> {
    // 将字符串作为语句执行，大括号将被解析为块语句，因此最终结果值是2
    expect(eval('{x: 2}')).to.be.equal(2); // 2

    // 将代码作为表达式执行，结果值是一个对象
    expect(eval('({x: 2})')).to.be.eql({x: 2}); // {x: 2}

    // 模板总是按表达式执行，因此结果值也是一个对象
    expect(`${{x: 2}}`).to.be.equal(String(new Object)); // '[object Object]'

    // 模板字符串可以用来...处理JSON文件，例如：
    expect(`${JSON.stringify({x: 2})}`).to.be.equal('{"x":2}');
  });
});