var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Say `Hello world` using promise', output => {
  	let p = eval(load('../1.js')); // result is promise2
  	return p.then(x => {
  	  expect(output.stdout).to.be.equal('Hello world\n');
  	})
  });
});