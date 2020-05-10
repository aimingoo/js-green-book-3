var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Recheck testcase 1', ()=> {
    eval(load('../1.js'));
    expect(()=>new MyObject).be.throw(TypeError, 'is not a constructor');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    eval(load('../2.js'));
    expect(() => proxy.n1 = 100).not.be.throw();

    let expect_pattens = [
      /GetOwnProperty.*on proxy/,
      /GetOwnProperty.*on target/,
      /GetOwnProperty.*on target/,
      /DefineOwnProperty.*on proxy/,
      /GetOwnProperty.*on target/,
      /^$/]; // empty line
    output.stdout.split("\n").forEach((x, i) => {
      expect(x).to.be.match(expect_pattens[i])
    });
    expect(obj.n1).to.be.equal(100);
  });
});
