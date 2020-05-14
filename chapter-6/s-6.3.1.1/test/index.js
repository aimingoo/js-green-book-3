var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
  	console.log = global_console_log; // reset default console.log

    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('10\n1\n0\n[]\n1\n');
  });

  it('A case for value/reference operation', ()=> {
  	// “取值操作”：`[]`是一个单独的操作数，被ECMAScript称为values in language types
    expect(() => eval('++[]'))  // eval with syntax error
    	.be.throw(ReferenceError);

    // “属性存取操作”：`[5][0]`是一个运算结果，被ECMAScript称为reference in specification types
    expect(eval('++[5][0]'))
    	.to.be.equal(6);
  });
});