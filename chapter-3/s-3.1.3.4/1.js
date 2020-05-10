var obj = {
  method: function() { },
  prop: 1234
}
golbal_value = 'abcd';
array_value = [0,1,2,3,4];
function testFunc() {   value2 = 1234;
  delete value2;
}// 调用testFunc()函数，函数内部的delete用法也是正确的
testFunc();

// 以下四种用法都是正确的
delete obj.method;
delete obj['prop'];
delete array_value[2];
delete golbal_value;

// 也可以删除全局对象Global的某些成员
delete isNaN;
