var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let case1_expect_output = [
    String(function MyObjectEx2() { }),
    String(function MyObjectEx() { }),
    String(function MyObject() { }),
    String(Object),
    String(null)
  ].map(x => '>> '+x);

  fancy.stdout().stderr().
  it('Traversing prototype-chain', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split('\n'))
      .to.be.eql(case1_expect_output.concat([""])); // with a newline
  });

  fancy.stdout().stderr().
  it('More checks', output => {
    let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
    eval(load('../1.js'));
    eval(load('../2.js')); // （续上例）
    let output_stdout = output.stdout.split("\n")
      .splice(case1_expect_output.length)
      .join("\n");
    expect(output_stdout).to.be.equal("true\n100\nfalse\ntrue\nobject\n\nfalse\nobject\n");
  });
});
