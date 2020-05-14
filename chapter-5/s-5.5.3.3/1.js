var aObj = { value: 'hello' };
function foo() {
  with (aObj) {
    var value = 1000;
    console.log(aObj.value); // 显示值: 1000
  }
  console.log(value);  // 显示值：'undefined'
}

foo();