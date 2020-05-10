var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

require = require("@std/esm")(module,{"esm":"mjs"});

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('No need export string property name', output => {
  	// 使用字符串作为属性名可以随处访问
    expect(()=>require('../1-2.mjs')).not.be.throw();
    expect(output.stdout).to.equal('100\n');
  });

  fancy.stdout().stderr().
  it('Export symbol property name', output => {
    // 使用符号作为属性名时，... 必须导出标识符symbolPropName以访问对应的属性
    expect(()=>require('../2-2.mjs')).not.be.throw();
    expect(output.stdout).to.equal('100\n');
  });

  fancy.stdout().stderr().
  it('Resolving symbol in symbol table with Symbol.for()', output => {
  	// Symbol在全局建立了一个“符号名-符号”的对照表
    expect(()=>require('../3-2.mjs')).not.be.throw();
    expect(output.stdout).to.equal('100\nsymbolPropName\n');
  });
});
