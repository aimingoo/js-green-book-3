var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    // 任何可迭代对象都可以直接使用for...of来列举它的成员
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      ..."1 2 3".split(' '),
      ""]);
  });

  fancy.stdout().stderr().
  it('More checks ...', output => {
    // 展开作为参数
    expect(()=>console.log(...'abc')).not.be.throw();
    expect(output.stdout).to.be.equal("a b c\n");

    // 展开作为数组成员
    expect([...'abc']).to.be.eql(['a', 'b', 'c']);

    // 集合对象（Collection types）都可以创建自可迭代对象
    //  - 将可迭代对象作为new运算中的初始化参数即可
    expect(new Set('abc')).to.have.all.keys('a', 'b', 'c');

    // Array和TypedArray都具有from()方法用于从其他集合中得到元素
    expect(Array.from(new Set('abc'))).to.be.eql(['a', 'b', 'c']);

    // 集合元素是无序的，所以这里匹配的是其迭代出的顺序
    var [a, ...more] = new Set('abc')
    expect(a).to.be.equal('a');
    expect(more).to.be.eql(['b', 'c']);

    // 生成器 ... 委托后者批量地“产生”（这个集合的）值
    function* f() { yield* [1,2,3] }
    let tor = f();
    expect(tor.next().value).to.be.equal(1);

    // 一些使用数组或类数组的场合也允许直接使用可迭代对象
    let delayed = Promise.all(new Set('abc')).then(console.log)
      // .then(all => expect(all).to.be.have.members(["a", "b", "c"]));
      .then(() => {
        let lines = output.stdout.split("\n");
        expect(lines[lines.length-2]).to.be.equal("a,b,c");
      });

    // 数组的一些特性并不支持可迭代对象
    let pick = ()=>true; // pick element always
    expect(Array.prototype.filter.call(new Set('abc123'), pick)).to.be.empty;
    //  - compare of truth array
    expect(Array.prototype.filter.call([...'abc123'], pick))
      .to.be.eql(['a', 'b', 'c', '1', '2', '3']);

    // 将Array、TypedArray和array-like objects展开为对象属性
    //  - 注意这里使用的是对象字面量声明
    expect({...'abc'}).to.be.eql({
      0: 'a',
      1: 'b',
      2: 'c'
    });

    // 对象展开时使用的是属性存取，因此并不支持Set等可迭代对象
    expect({...new Set('abc')}).to.be.eql({}); // empty object

    return delayed;
  });
});