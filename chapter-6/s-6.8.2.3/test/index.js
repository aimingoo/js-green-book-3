var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let refChapter = '6.8.2', ref = `../../s-${refChapter}`;
  let babel_parser_module = `${ref}/prepack-core/node_modules/@babel/parser`;
  let useLocalParser = f => load(f).replace(/^let babel_parser_module *= *.*$/m,
    '/* The module path setting in current context. */');

  it('Recheck testcase 1', ()=> {
    eval(useLocalParser('../1.js')); // put `ast` into current context

    // PART 1: 在Node.js中检查AST树
    expect(ast.program.sourceType).to.be.equal('script'); // 'script'
    expect(ast.program.body[0].type).to.be.equal('ClassDeclaration'); // 'ClassDeclaration'
    expect(ast.program.body[0].body.body[0].type).to.be.equal('ClassMethod'); // 'ClassMethod'
    expect(ast.program.body[0].body.body[0].key.name).to.be.equal('constructor'); // 'constructor'

    // PART 2: (OR，直接访问ast来得到constructor子树)
    var constructor = ast.program.body[0].body.body[0];
    expect(constructor).to.be.include({
      type: 'ClassMethod',
      kind: 'constructor'
    });
  });
});