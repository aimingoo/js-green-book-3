var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    (0, eval)(load("../1.js")); // in global
    expect(output.stdout).to.be.equal("6\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    (0, eval)(load("../2.js")); // in global
    expect(output.stdout).to.be.equal("6\n6\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    (0, eval)(load("../3.js")); // in global
    expect(output.stdout).to.be.equal("MyObj\n");
  });

  let expect_result = ["o1","o2","o2","o2","o2",""].join("\n");

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout).to.be.equal(expect_result);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4 - global', output => {
    (0, eval)(load("../4.js")); // in global
    expect(output.stdout).to.be.equal(expect_result); // no diff
  });

  fancy.stdout().stderr().
  it('More cases ...', output => {
    // browser faker
    let document = { writeln: console.log };
    let print = document.writeln;
    print('this is a test.');
    expect(output.stdout.split("\n")[0]).to.be.equal('this is a test.');

    // 早期版本的Node.js中这也将导致异常
    return Promise.resolve("Hi").then(console.log)
      .then(()=> {
        expect(output.stdout.split("\n")[1]).to.be.equal("Hi");
      })
      .catch(e => {
        expect(e).to.be.a.instanceof(Error);
      });
  });
});
