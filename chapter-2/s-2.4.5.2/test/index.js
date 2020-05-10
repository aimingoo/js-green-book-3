var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Break in switch, and his default block', output => {
    require('../1.js');
    expect(output.stdout).to.equal('A\nX\n');
  });

  fancy.stdout().stderr().
  it('Break for if statment and other statment block', output=> {
    require('../2.js');
    expect(output.stdout).to.equal('2345678910\n');
  });

  it('Exception of label syntax 1', ()=> {
    expect(function() {
      return Function(`
my_label: {
  if (str && str.length < 10) {
    // 错误1：在标签化语句中用使用break而不带label
    break;
  }
  str = str.substr(str.length-10);
}`);}).be.throw(SyntaxError);
  });

  it('Exception of label syntax 2', ()=> {
    expect(function() {
      return Function(`
my_label:; // 该标签的范围是一个空语句
if (false) {
  // 错误2：在标签化语句的范围之外引用该标签
  break my_label;
}`);}).be.throw(SyntaxError);
  });

  it('Exception of label syntax 3', ()=> {
    expect(function() {
      return Function(`
if (false) {
  // 错误3：在有效的范围(标签化语句、循环和switch分支)之外使用break;
  break;
}`);}).be.throw(SyntaxError);
  });
});