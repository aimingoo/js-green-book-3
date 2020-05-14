let babel_parser_module = './lib/@babel/parser';

// 步骤1：准备文本代码（例如从文件中载入）
// （prepack中默认构造器的硬代码）
var constructorSourceText = `\
class NeedClassForParsing extends Object {
  constructor(... args) {
    super (...args)
  }
}`;

// 步骤2：装入解析器
var { parse } = require(babel_parser_module);

// 步骤3：解析语法树
var filename = "", sourceType = "script"; // default options
var ast = parse(constructorSourceText, {filename, sourceType});

// 步骤4：得到可执行的AST节点
var { program: { body: [classDeclaration] } } = ast;
var { body } = classDeclaration;
var { body: [constructor] } = body;