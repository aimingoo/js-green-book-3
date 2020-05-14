function MyFunc(){
  var data = 100;
  function func_1() {
    data = data * 5;
  }
  function func_n() {
    console.log(data);
  }

  func_1();
  func_n();
}

// 由于func_n与func_1使用相同的upvalue变量data，因此在func_n()中可以显
// 示func_1()对该值的修改，返回结果值: 500
MyFunc();
