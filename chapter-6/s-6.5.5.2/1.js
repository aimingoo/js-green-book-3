// 示例1：暂存与重写对象
var obj = {
  name: 'myName',
  value: 0
}
for (var i in obj) {
  // 重写对象：该重写不会影响到for语句对obj的引用
  obj = {};  
}