var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1 - async', output => {
    // DONT USE NEXT LOAD METHOD, WE ARE NEED CATCH OUTOUT IN ASYNC METHODS
    // (0, eval)(load("../1.js")); // in global

    // insert `async` and `await` in sourceText
    return Promise.resolve((0, eval)(`
      var AsyncFunction = (async x=>x).constructor;
      var valueInScope = 'global';

      async function test() {
        var valueInScope = 'function test';
        await (async function() { return 'def: '+valueInScope })().then(console.log);
        await (new AsyncFunction("return 'new: '+valueInScope"))().then(console.log);
      }

      test();  // return a promise
    `))
    .then(() => {
      expect(output.stdout.split("\n")).to.be.eql([
        "def: function test",
        "new: global",
        ""]);
    });
  });
});