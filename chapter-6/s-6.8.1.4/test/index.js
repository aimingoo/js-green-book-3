var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let refChapter = '6.8.1.2', ref = `../../s-${refChapter}`;

  it('Recheck testcase 1', () => {
    // 装载一个基础的QoBean
    eval(load(`${ref}/beanta/Meta.js`));

    // 参考`6.8.1.3`小节，以及本书第二版以得到一个完整的实现
    let DSL = function(environment, evaluator, parser) {
      return new Function();
    }

    // 得到一个定制的dsl
    let dsl = new DSL(/*...*/);
    expect(()=>eval(load('../1.js'))).not.be.throw();
  });
});