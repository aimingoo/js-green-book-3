var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

let refChapter = '3.4.1.2', ref = `../../s-${refChapter}`;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    eval(load(`${ref}/1.js`));
    eval(load('../1.js'));

    // 测试4: 鸵鸟是鸟，但不能飞
    expect(()=>doFly(new Ostrich())).not.be.throw();
    expect(output.stdout).to.be.equal('I can\'t fly.\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    eval(load(`${ref}/1.js`));

    // class need export or return
    let srcContext = load('../2.js');
    let Ostrich, execContext = '(function() {\n' + srcContext + '\nreturn Ostrich})';
    expect(Ostrich = eval(execContext).call()).to.be.a("function");

    // 测试5: 让鸵鸟具备Bird一样的飞的能力
    expect(()=>doFly(new Ostrich())).not.be.throw();
    expect(output.stdout).to.be.equal('I can fly.\n');
  });
});