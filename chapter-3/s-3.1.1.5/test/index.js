var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it.skip('Invalid property define', ()=> {
    expect(function() {
      // 不正确的用法：同时出现“名/值”声明与存取器声明
      obj2 = {
        aName: 'a value.',
        get aName() {
           // ...
        }
      }
    }).be.throw(SyntaxError);
  });
});
