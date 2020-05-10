var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Simple template using, and template call', output => {
    require('../1.js');
    expect(output.stdout).to.equal('The message is: Hello world.\nThe null is object type.\nobject true xyz\nHi,\nworld\nHi,\nworld\n');
  });

  fancy.stdout().stderr().
  it('Template as multiline string define', output => {
    require('../2.js');
    expect(output.stdout).to.equal('\n上面的第一个换行符是有效的，而某些语言（例如lua）中多行声明的第一个换行符是无效的。\n如果要避免行末（包括上面说的第一行）的换行符，可以使用\\字符来结尾，例如：——这种声明连续字符串的规则仍然是有效的。\n    各行前的空格、制表符以及行后的换行符等等都是有效的。\n需要使用\\来转义`、$和\\字符。\n其它在一般字符串中的类似于\\n之类的转义符也是可用的。\n但是单引号(”)和双引号(\')不必再转义。\n当然，你总是可以使用${...}来捕获表达式输出。\n');
  });
});