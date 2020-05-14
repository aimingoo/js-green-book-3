var AsyncFunction = (async x=>x).constructor;
var valueInScope = 'global';

function test() {
  var valueInScope = 'function test';
  (async function() { return 'def: '+valueInScope })().then(console.log);
  (new AsyncFunction("return 'new: '+valueInScope"))().then(console.log);
}

test();