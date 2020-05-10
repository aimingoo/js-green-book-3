var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Arrow function with default paraments', ()=> {
    // 一个箭头函数，及其参数表中的缺省值
    let foo = (a = 100) => a;
    expect(foo()).to.be.equal(100);
  });

  it('Default value in object assignment pattern', ()=> {
    // 对象赋值模板中的缺省值
    var { a = 100 } = {};
    expect(a).to.be.equal(100);
  });

  it('Extensional...', ()=> {
    var a; // catcher
    expect({ 100 : a = 100 }).to.be.eql({"100": 100});
    expect(a).to.be.equal(100);

    if ({ 100 : a = 100 } = { 100 : a = 100 })
      expect(a).to.be.equal(100);

    if ({ 100 : a = 100 } = { 100 : a = 200 })
      expect(a).to.be.equal(200);

    if ({ 100 : a = 200 } = { 100 : a = 100 })
      expect(a).to.be.equal(100);

    if ({ 0 : a = 'ok' } = { 100 : a = 100 })
      expect(a).to.be.equal('ok');

    if ({ 0 : a = 100 } = { 0 : a = 'ok' })
      expect(a).to.be.equal('ok');
  });
});