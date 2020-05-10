// 在catch参数中使用赋值模板
try {
  // 可以将任意对象/值作为对象抛出
  throw { message: 'A Error', code: 1234 }; 
}
catch({message, code}) {
  console.log(`${code}: ${message}`);  // 1234: A Error
}