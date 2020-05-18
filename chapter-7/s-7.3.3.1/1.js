p = new Promise(function(resolve, reject) {
  resolve('Hello world!');
});

p.then(function(value) {
  console.log(value);
});