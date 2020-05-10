var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Some statements no value', ()=> {
    // 函数声明语句
    expect(eval('5;function f() {}')).to.be.equal(5);
    // let/const声明语句
    expect(eval('5;let x = 100;')).to.be.equal(5);
    expect(eval('5;const y = 1000;')).to.be.equal(5);
    // var声明语句
    expect(eval('5;var x2 = 1000;')).to.be.equal(5);
  });

  it('Return undefined when eavl no value statement', ()=> {
    // 当eval作用于结果无值的语句时，它将返回undefined
    expect(eval('function f() {}')).to.be.undefined;
  });

  // 如果语句无值，那么把它放在一批语句的末端时，将不会影响该语句的结果
  it('Ignore result when no value statement at last', ()=> {
    // 空语句被eval()执行时返回undefined
    expect(eval(';')).to.be.undefined;

    // 示例：该语句被eval()执行时将返回值1
    expect(eval('1;')).to.be.equal(1);

    // 空语句不影响上述返回值（下例是多个空语句）
    expect(eval('1;;;;;;')).to.be.equal(1);

    // 空块语句也不影响上述返回值
    expect(eval('1;{};')).to.be.equal(1);

    // 声明语句也不影响上述返回值
    expect(eval('1; let x = 1000;')).to.be.equal(1);
  });
});