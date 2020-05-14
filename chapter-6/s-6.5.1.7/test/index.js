var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Some cases for operator precedence', ()=> {
    let x; // catcher

    // 对象x
    expect(x = { a: 100 }).to.be.a("object");

    // 示例（赋值）
    expect(x.a = 200).to.be.equal(200); // 200

    expect(x.a = x = 1)
      .to.be.equal(x.a = (x = 1)); // 与上例类似效果

    // (重现上例)
    let r; // catcher

    // 用r来得到最开始x变量的一个引用
    r = x = { a: 100 }

    // 重写x
    expect(x.a = x = 1).to.be.equal(1); // 1

    // x被重写
    expect(x).to.be.equal(1); // 1

    // 在连续赋值中“被暂存的”x.a也是成功赋值
    expect(r.a).to.be.equal(1); // 1

    // (使用“op=”重现示例)
    r = x = { a: 100 }
    x.a += x = 1
    expect(x).to.be.equal(1); // 1

    // x.a的变化
    expect(r.a).to.be.equal(101); // 101
  });
});