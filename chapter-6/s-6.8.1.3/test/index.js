var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let refChapter = '6.8.1.2', ref = `../../s-${refChapter}`;

  it('Recheck testcase 1', ()=> {
    expect(()=>require('../1.js')).not.be.throw();
  });

  let simple_evaluator = Function('sourceText', 'return eval(sourceText)');

  it('Recheck testcase 2', () => {
    eval(load(`${ref}/beanta/Meta.js`));
    eval(load('../2.js'));
    let dsl = new DSL(new Object, simple_evaluator, new Function);
    expect(dsl).to.be.a("function");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    eval(load(`${ref}/beanta/Meta.js`));
    eval(load('../3.js'));
    let dsl = new DSL(new Object, new Function, new Function);
    expect(dsl).to.be.a("function");
  });
});