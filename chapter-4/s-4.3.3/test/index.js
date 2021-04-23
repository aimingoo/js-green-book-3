var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();

    let output_stdout = output.stdout.split("\n");
    output_stdout.pop(); // pop empty line
    let line4 = output_stdout[0];
    let line11 = output_stdout[1];

    // NOTE: in JScript 5
    //  - 这意味着在“变量提升”效果的影响下，代码行4将输出两个对象“[function x], [function y]”。
    // expect(line4).to.be.equal([function x() {}, function y() {}].join());

    // NOTE: in firefox old version, or narcissus
    //  - 如果引擎支持这项特性，那么第4行代码就应该输出“outer, outer”；
    // expect(line4).to.be.equal([outer, outer].join());
    //  - 而到了第11行，...因此输出“[function x], outer”
    // expect(line11.split(',')[0]).not.be.equal('outer');

    // in Node.js, annex-b enable default
    expect(line4).to.be.equal([undefined, undefined].join());
    expect(line11.split(',')[0]).not.be.equal([undefined, undefined].join()); // `x` be updated
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();

    // NOTE: in prepack-core
    //  - 由于这里没有顶层变量，因此x,y都是outer
    // expect(output.stdout.split("\n")).to.be.eql([
    //   ["outer", "outer"].join(),
    //   "function",
    //   ""])

    // in Node.js, annex-b enable default
    //  - 注：该例在NodeJS中的执行效果会不同
    expect(output.stdout.split("\n")).to.be.eql([
      [undefined, "outer"].join(),
      "function",
      ""])
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();

    // NOTE: in prepack-core
    //  - 由于这里没有顶层变量，因此x将总是指向outer
    // expect(output.stdout.split("\n")).to.be.eql([
    //   "outer",
    //   "outer",
    //   ""])

    // in Node.js, annex-b enable default
    //  - 注：该例在NodeJS中的执行效果会不同
    let output_stdout = output.stdout.split("\n");
    output_stdout.pop(); // pop empty line
    let line3 = output_stdout[0];
    let line5 = output_stdout[1];
    expect(line3).to.be.equal("undefined"); // `x` is undefined
    expect(line5).not.be.equal("undefined"); // `x` be updated
  });
});