var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('created by MyClass\n');
  });

  it('Make a reference error when lost `this`', ()=> {
    expect(function() {
      class MyClass extends null {
        constructor() {
            // no `this`, no return
        }
      }
      return new MyClass;
    }).be.throw(ReferenceError, 'Must call super');
  });
});