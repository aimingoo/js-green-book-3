var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  // 在子类MyObjectEx的构造器方法中调用父类的构造方法
  it('Call super\'s constructor method', ()=> {
    // The define in s-3.1.2.2
    class MyObject {}
    MyObject.prototype.aName = 'value';

    // maybe, you need `x` or `y` define
    let x = 100, y = 200;

    // 访问父类构造方法
    expect(() => {
      class MyObjectEx extends MyObject {
        constructor() {
          super(x, y);
        }
      }
      return new MyObjectEx();
    }).not.be.throw();

    // 与如下使用构造函数的传统方式是类似的
    expect(() => {
      function MyObject() {
        // 传统方式中的父类
      }
      function MyObjectEx() {
        // super(x,y)将实现为类似代码
        MyObject.apply(this, [x, y]);
      }
      MyObjectEx.prototype = new MyObject();
      MyObjectEx.prototype.constructor = MyObjectEx;
      return new MyObjectEx;
    }).not.be.throw();

    // 需要先显式地调用super()以便在当前构造方法中获得this实例
    expect(() => {
      class MyObjectEx extends MyObject {
        constructor() {
          super();      // <- 必须在引用this之前调用super()方法
          this.x = 100;
          this.y = this.x * 100;
        }
      }
      return new MyObjectEx;
    }).not.be.throw();

    // 如果没有extends，那么不调用super也是可以的
    expect(() => {
      // 没有extends时，不调用super也可以访问this
      class MyObject {
        constructor() {
          this.x = 100;
          // console.log(this);
        }
      }
      return new MyObject;
    }).not.be.throw();
  });
});
