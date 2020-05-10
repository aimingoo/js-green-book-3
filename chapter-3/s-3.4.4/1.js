// 得到global对象的标准方法
var global = (new Function('return this'))();

// 列举所有宿主对象和全局变量（在NodeJS中它们一般以显式成员名存在）
Object.keys(global);

// 列举所有全局名字（内建对象、宿主对象和全局变量等）
Object.getOwnPropertyNames(global);