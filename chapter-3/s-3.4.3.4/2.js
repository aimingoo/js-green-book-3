// 方法6：使用Object.create()直接基于原型创建对象
var aPrototypeObject = {name1: 'value1'};

var aInstance = Object.create(aPrototypeObject, {
    name2: {value: 'value2'},
    name3: {get: function() { return 'value3' }}
  }
)