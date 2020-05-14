// 构造器的实例初始化阶段中存在的递归过程
function MyObject(x) {
  MyObject.call(this, x);
}