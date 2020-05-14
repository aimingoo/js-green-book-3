var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Function is value', () => {
    // 声明一个(命名的)函数变量
    function myFunc() {
      // ...
    }

    // 直接参与布尔运算
    expect(()=>{
      if (!myFunc) {
        // ...
      }
    }).not.be.throw();

    // 与字符串等其他类型数据混合运算
    let value = 'The function is ' + myFunc;
    expect(value).to.be.match(/^The function/);

    // 函数作为参数传入
    function test(foo) {
      // 函数参与表达式运算, 以及作为函数返回值传出
      return (foo !== myFunc ? foo  : function() {
         // ...
      });
    }
    // 将test()函数调用的返回值作为新的函数(f)调用
    expect(test(myFunc)).not.be.throw();  // the `throw()` will call f() once
  });
});