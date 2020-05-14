function foo(filename) {
  var [filename2, ...args] = arguments; 

  // filename会影响arguments
  filename = 'new file name'; // changed
  console.log(arguments[0]); // 'new file name'
  console.log(filename2); // 'test.txt'

  // arguments也会影响filename
  arguments[0] = filename2; // reset to orignal
  console.log(filename); // 'test.txt'

  // 使用filename2时没有影响
  filename2 = 'update again';
  console.log(arguments[0]); // 'test.txt'
  console.log(filename); // 'test.txt'
}

foo('test.txt');