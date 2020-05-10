var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Try search in table', output => {
    eval(load('../1.js'));
    expect(()=> {
      let tbl = [1,3,4,"abc","ok",154,14];
      console.log(SearchInTable('ok', tbl)); // true
      console.log(SearchInTable(1000, tbl)); // false
    }).not.be.throw();
    expect(output.stdout).to.be.equal('true\nfalse\n');
  });
});