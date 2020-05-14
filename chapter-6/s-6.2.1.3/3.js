// 示例3：检测值类型数据、字面量与包装类的性质

Object.prototype.getSelf = function(){
  return this;
}

Object.prototype.getClass = function(){
  return this.constructor;
}

Object.prototype.getTypeof = function(){
  return typeof this;
}

Object.prototype.getInstanceof = function(){
  return this instanceof this.getClass();
}

// 样本：7种字面量和字面量风格的声明
//（另，模板字面量将按字符串处理）
var samples = [
  '',  // 字符串
  100, // 数值
  true, // 布尔值
  function(){},  // 函数
  {},  // 对象
  [],  // 数组
  /./  // 正则
];

// 样本：添加符号作为特例（不支持字面量）
samples.push(Symbol());

// 取特性
var getAttr = (v, v2, cls) => [
  typeof v, v2.getTypeof(), v instanceof cls, v2.getInstanceof()
];

// 检测
samples.map(v => [typeof v, getAttr(v, v.getSelf(), v.getClass())])
  .forEach(([metaName, attr]) => {
    console.log(metaName, ':', attr);
  });