var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Some direct value operation', output => {
    // 通过修改原型将“所有字符串对象转换为数值0
    String.prototype.valueOf = ()=>0;

    // 测试
    expect('5'.valueOf()).to.be.equal(0);

    // 尝试对字符串对象求和（将隐式转换为数值，受原型方法影响）
    expect(1 + new String('6')).to.be.equal(1);

    // 尝试对字符串值求和（在隐式转换中没有原型方法参与）
    // （注：这个示例中没有直接使用+号，是因为在值运算中，加号（+）运算符优先字符串连接）
    expect(1 + +'6').to.be.equal(7);

    // 运算符两侧都是值类型数据，因此优先做“字符串连接”
    expect(1 + '6').to.be.equal('16');

    // 右侧是一个对象，先将该对象隐式转换，然后再应用“字符串连接优先”规则
    //   - 在隐式转换中会受String.prototype.valueOf()方法影响
    //   - 应用“字符串连接优先”时会再次检查两个操作数（或其隐式转换之后）的值
    expect(1 + new String('6')).to.be.equal(1);

    // 重写String.prototype, 显示被调用的信息
    String.prototype.valueOf = ()=> console.log('call me');

    // x是值类型数据
    var x = '0';

    // 可以通过包装类“对值数据进行的”方法调用
    expect(x.valueOf()).to.be.undefined; // valueOf()方法重写后没有返回值
    expect(output.stdout.split("\n")[0]).to.be.equal("call me"); // 将输出`call me`

    // 但值运算中并不调用相应的方法（例如这里没有显示'call me'）
    console.log(+x); // 0
    expect(output.stdout.split("\n")[1]).to.be.equal("0"); // 0
  });

  it('Throw a exception when convert symbol.', ()=> {
    expect(() => {
      // 触发异常，但返回的TypeError错误是“+”运算发出的，而非来自隐式的转换逻辑
      var x = Symbol();
      console.log(+x);  // TypeError: Cannot convert a Symbol value to a number
    }).be.throw(TypeError, 'convert');
  });
});
