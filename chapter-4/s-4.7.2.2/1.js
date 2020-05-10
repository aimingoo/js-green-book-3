function f() {
  var x = 100;
  eval('var y = 1000');
  console.log('values of x,y:', x, y);
}
