function MyObject() {
  // 私有(private)变量
  var data = 100;

  // 私有(private)函数
  function _run(v) {
    console.log(v);
  }

  // 公开(public)属性
  this.value = 'The data is: ';

  // 公开(public)方法
  this.run = function() {
     _run(this.value + data);
  }
}

// 演示. 最终将调用到_run()函数 
var obj = new MyObject();
obj.run();
