var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  // specify format by console.log
  fancy.stdout().stderr().
  it('Method console.log trigger x.toString()', output => {
    global_console_log(String({ toString() { return 'pass' } }));
    expect(output.stdout).to.equal("pass\n");
  });

  // convert by `+` operator
  fancy.stdout().stderr().
  it('Some operators no trigger own x.toString()', output => {
    let x = new String('hi');
    x.toString = function() { return 'pass' };
    global_console_log('' + x);
    expect(output.stdout).to.equal("hi\n");
  });

  // call x.toString by Array.prototype.join
  fancy.stdout().stderr().
  it('Trigger own x.toString() by Array.prototype.join', output => {
    global_console_log([{ toString() { return 'pass' } }].join());
    expect(output.stdout).to.equal("pass\n");
  });
});
