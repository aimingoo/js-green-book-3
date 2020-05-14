var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let refChapter2 = '6.8.2.2', ref2 = `../../s-${refChapter2}`;
  let refChapter3 = '6.8.2.3', ref3 = `../../s-${refChapter3}`;
  let refChapter4 = '6.8.2.4', ref4 = `../../s-${refChapter4}`;
  let refChapter5 = '6.8.2.5', ref5 = `../../s-${refChapter5}`;
  let refChapter6 = '6.8.2.6', ref6 = `../../s-${refChapter6}`;
  let libChapter = '6.8.2', refCore = `../../s-${libChapter}/prepack-core`;

  let lib = `${refCore}/lib`,
  	  babel_parser_module = `${refCore}/node_modules/@babel/parser`;
  let loadEnv = f => load(f).replace(/^let lib *= *.*$/m, '/* The `lib` setting in current context. */');
  let useLocalParser = f => load(f).replace(/^let babel_parser_module *= *.*$/m,
    '/* The module path setting in current context. */');

  it('Recheck testcase 1', ()=> {
    eval(loadEnv(`${ref2}/2.js`)); // !FULL! load prepack-core environment
    eval(useLocalParser(`${ref3}/1.js`)); // load local parser
    eval(load(`${ref4}/1.js`)); // call pushContext(), and make current `context`
    eval(load(`${ref5}/1.js`)); // put `currentContext()`
    eval(load(`${ref6}/1.js`)); // put data `x` and `y`

    eval(load('../1.js')); // put `evaluators` and a newly `evaluate`

    // 为存储分析记录而实现的结构（供prepack调试分析用）
    realm.statistics = {evaluatedNodes: 0}
    // （执行节点ast，参见此前：ast = parse(`x+y`, ...)）
    ast = parse('x+y', {filename, sourceType}); // replace `ast`, orignal from `$ref3/1.js`

    // 测试“步骤4：”，计算求值
    expect(evaluate(ast, false)).to.include({ value: 300 }); // IntegralValue { ...

    // More ...
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2 - final', output => {
    eval(loadEnv(`${ref2}/2.js`)); // !FULL! load prepack-core environment
    eval(useLocalParser(`${ref3}/1.js`)); // load local parser
    eval(load(`${ref4}/1.js`)); // call pushContext(), and make current `context`
    // eval(load(`${ref5}/1.js`)); // !REPLACED!
    eval(load(`${ref6}/1.js`)); // put data `x` and `y`

    // final version!
    eval(load('../1.js')); // the `evaluate`, `evaluators`
    eval(load('../2.js')); // the `DSL`, and newly `currentContext()`
    realm.statistics = {evaluatedNodes: 0} // prepack调试分析用

    // 可以操作数据（Language types），或用来与引擎内的代码交换信息
    // （例如：在引警或宿主中显示从dsl中返回的值）
    print = ({value}) => console.log(value);

    // 应用DSL框架
    dsl = new DSL(realm.$GlobalEnv, evaluate, parse);

    // 使用dsl语言
    print(dsl(`x+y`));

    // 检查输出
    expect(output.stdout).to.be.equal("300\n");
  });
});