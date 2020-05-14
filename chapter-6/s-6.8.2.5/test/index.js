var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let refChapter2 = '6.8.2.2', ref2 = `../../s-${refChapter2}`;
  let refChapter3 = '6.8.2.3', ref3 = `../../s-${refChapter3}`;
  let refChapter4 = '6.8.2.4', ref4 = `../../s-${refChapter4}`;
  let libChapter = '6.8.2', refCore = `../../s-${libChapter}/prepack-core`;

  let lib = `${refCore}/lib`,
      babel_parser_module = `${refCore}/node_modules/@babel/parser`;
  let loadEnv = f => load(f).replace(/^let lib *= *.*$/m, '/* The `lib` setting in current context. */');
  let useLocalParser = f => load(f).replace(/^let babel_parser_module *= *.*$/m,
    '/* The module path setting in current context. */');

  it('Recheck testcase 1~2', ()=> {
    let currentContext; // catcher
    eval(loadEnv(`${ref2}/1.js`)); // load prepack-core environment
    eval(useLocalParser(`${ref3}/1.js`)); // load local parser
    eval(load(`${ref4}/1.js`)); // call pushContext()

    eval(load(`../1.js`)); // case1, put `evaluate` in current environment
    expect(parse).to.be.a('function');
    expect(evaluate).to.be.a('function');
    expect(currentContext).to.be.a('function');

    // 执行并得到结果
    eval(load(`../2.js`)); // case2， put data `x` and `y`
    let result = evaluate(parse(`x+y`, {filename, sourceType})); // 300

    // 检查结果
    expect(result).to.be.equal(300);
  });

  it('Recheck testcase 3', ()=> {
    eval(loadEnv(`${ref2}/1.js`)); // load prepack-core environment
    eval(useLocalParser(`${ref3}/1.js`)); // load local parser
    eval(load(`${ref4}/1.js`)); // call pushContext()

    // 这里的类作用域(classScope)是当前ast中为`class`创建的静态词法作用域
    // （本例是不完整的，只用于介绍`constructor()`方法在prepack中的实现过程）
    let classScope = { /* ... */ };
    // 这里的`DefineMethod`是在prepack中对ECMAScript规范14.3.8的实现
    // （@see `${prepack-core}/source/methods/function.js`）
    let Functions = { DefineMethod() {} };

    // test
    expect(() => {
      eval(load(`../3.js`));
    }).not.be.throw();
  });
});