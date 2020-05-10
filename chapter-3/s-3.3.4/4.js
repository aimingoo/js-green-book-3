class MyObject extends null {}

try {
  new MyObject;
}
catch(e) {
  console.log('ERROR:', e.message); // MyObject()不能作为构造器，无法创建实例
}
