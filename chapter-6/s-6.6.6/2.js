function myName(ctx) {
  eval(ctx);
  eval.call(null, 'myName = Array.prototype.splice');
}
myName("var Array = '...'");
