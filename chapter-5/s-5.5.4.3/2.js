// 示例2
var obj = new Object();
for (var i=0; i<5; i++) {
  obj['method' + i] = function() {
    //...
  };
}
// 显示false, 表明产生了多个函数实例
console.log( obj.method2 === obj.method3 );