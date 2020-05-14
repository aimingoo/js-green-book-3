var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('A reference error when expression evaluation', ()=> {
    // JavaScript并不会将它作为语法错误（在语法分析期）抛出
    expect(()=>{
      return ()=>eval('1++');  // 这里用作一个箭头函数的body，但只返回该函数而不执行
    }).not.be.throw();

    // 这是到具体执行该行代码时才会触发一个“引用错误（ReferenceError）”
    expect(()=>eval('1++'))
      .be.throw(ReferenceError); // Invalid left-hand side ...

    // ... 仍然是与上例完全相同的错误
    expect(()=>eval('++{}'))
      .be.throw(ReferenceError); // Invalid left-hand side ...

    // 这些情况都是存在的，都是“合法的引用”
    expect(()=> {
      // abc可能是一个“未确定的（unresolvable）”引用，并需要后续被动态地创建并绑定给global
      function foo() {
        abc = 100;
      }

      // 被全局环境（全局环境记录是一种内部结构）引用
      var x = 100;

      // x被对象obj作为属性引用
      var obj = {x};
    }).not.be.throw();

    // 下面这两个示例的效果并不相同:

    // pop()的返回值是“孤立存在的”一个值，并没有被东西引用 
    expect(()=>eval('[100].pop()++'))
      .be.throw(ReferenceError); // Invalid left-hand side ...

    // 数组的成员是被数组引用的，所以“存取数组成员的表达式”作为运算结果，是一个引用
    expect(()=>eval('[100][0]++'))
      .not.be.throw();
    expect([100][0]++).to.be.equal(100);
  });
});
