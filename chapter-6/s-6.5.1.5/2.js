try {
  try {
    throw {message: 'ERROR!', code: 100};
  }
  catch ({message, code}) {
    var message = 'NOTHING';  // <-- 这里重新声明将触发异常
    console.log(message, code)
  }
}
catch (e) { // <-- 如同上面的message一样，变量"e"也是不能被重新声明的
  e = {message: 'new error message' }; // <-- 这里的重写是安全的
  console.log(e);
}