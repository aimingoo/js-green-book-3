var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Recheck testcase 1', ()=> {
    expect(()=>require('../1.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('More checks for testcase 1', output => {
    eval(load('../1.js'));

    // 2. 添加事件处理句柄
    obj.OnError = function(e) {
      console.log("ERROR:", e.message); // mute exception and write console
    }
    expect(() => {
      // 3. 调用方法, 触发OnError事件
      obj.doAction('xx -> 100');  // Syntax Error
    }).not.be.throw();
    expect(output.stdout).to.be.match(/^ERROR:/); // ERROR: Unexpected token >

    // more, throw again
    obj.OnError = e => { throw e };
    expect(() => {
      obj.doAction('xx -> 100');  // Syntax Error
    }).be.throw(SyntaxError);
  });
});