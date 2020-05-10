var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Recheck testcase 1', ()=> {
    // 因此上面这个函数可以通过语法检测，而且也存在执行意义
    expect(()=>require('../1.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    // define TObject, and Class()
    let TObject = null, Class = function(base, impl) {
      console.log(impl!==undefined ? "success access" : "fail");
    }
    // 执行期函数foo在“它所在变量作用域之内的” 任意位置都可以直接使用
    expect(()=>eval(load('../2.js'))).not.be.throw();
    expect(output.stdout).to.be.equal("success access\n")
  });
});