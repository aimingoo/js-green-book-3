var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let refChapter = '6.8.2.2', ref = `../../s-${refChapter}`;
  let libChapter = '6.8.2', lib = `../../s-${libChapter}/prepack-core/lib`;
  let loadEnv = f => load(f).replace(/^let lib *= *.*$/m, '/* The `lib` setting in current context. */');

  it('Recheck testcase 1', ()=> {
    eval(loadEnv(`${ref}/1.js`)); // load prepack-core environment
    eval(load(`../1.js`)); // load testcase
    expect(context.lexicalEnvironment).to.be.equal(realm.$GlobalEnv);
  });
});