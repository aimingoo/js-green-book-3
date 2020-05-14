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

  it('Recheck testcase 1', ()=> {
    eval(loadEnv(`${ref2}/1.js`)); // load prepack-core environment
    eval(useLocalParser(`${ref3}/1.js`)); // load local parser
    eval(load(`${ref4}/1.js`)); // call pushContext()

    // prepack实现的"语言类型（Language types）"
    eval(load('../1.js')); // the `Types`

    // 每种类型是一个构造器
    expect(typeof Types.NumberValue).to.be.equal('function'); // 'function'

    // 可以构造一个"可在引擎中识别的"数据
    expect(new Types.NumberValue(realm, 100)).to.be.include({ value: 100 }); // NumberValue { ...

    // （或，再次赋值）
    // （参见ES7, 8.1.1.4.5 SetMutableBinding ( N, V, S )）
    expect(() => {
      realm.$GlobalEnv.environmentRecord.SetMutableBinding('x', EngineData.x, false);
      realm.$GlobalEnv.environmentRecord.SetMutableBinding('y', EngineData.y, false);
    }).not.be.throw();

    // More ...
  });
});
