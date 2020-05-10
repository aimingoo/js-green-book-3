// 模拟浏览器环境
var window = Function('return this')();  // equal `global`

// 示例: 兼容更早版本的对象检查代码
if (window.XMLHttpRequest) {   // for ie7.0+, or mozilla and compat browser
  return new XMLHttpRequest();
}