var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    let tag = 0;
    eval(load('../1.js'));
    expect(output.stdout).to.be.equal(""); // nothing

    tag = 10;
    eval(load('../1.js')); // tag > 1
    expect(output.stdout).to.be.equal("true\ntrue\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    let tag = 0;
    eval(load('../2.js'));
    tag = 10;
    eval(load('../2.js')); // tag > 1

    expect(output.stdout.split("\n")).to.be.eql([
      "false", "false", // tag == 0
      "true", "true", "true", "true", // tag > 1
      ""]);
  });


  let expect_result = [ // for_case3_and_case4
    "value is 200 or 100", // value = 100
    "value is 200 or 100", // value = 200
    "value is 300", // value = 300
    "I don't know."]; // value = 0

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    let value = 100;
    eval(load('../3.js'));
    value = 200;
    eval(load('../3.js'));
    value = 300;
    eval(load('../3.js'));
    value = 0;
    eval(load('../3.js'));

    let double_expect_result = [];
    expect_result.forEach(x => double_expect_result.push(x, x));
    expect(output.stdout.split("\n"))
      .to.be.eql([...double_expect_result, ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    let value = 100;
    eval(load('../4.js'));
    value = 200;
    eval(load('../4.js'));
    value = 300;
    eval(load('../4.js'));
    value = 0;
    eval(load('../4.js'));

    expect(output.stdout.split("\n"))
      .to.be.eql([...expect_result, ""]);
  });
});