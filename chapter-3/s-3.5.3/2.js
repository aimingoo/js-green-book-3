// isSealed(obj)和isFrozen(obj)两个状态是使用类似如下代码得到的：
let isSealed = function(obj) { 
  return !Object.isExtensible(obj) &&
    Object.values(Object.getOwnPropertyDescriptors(obj))
      .every((desc)=>!desc.configurable);
}

// 当desc.writable以undefined值参与运算时并不影响结果
let isFrozen = function(obj) { 
  return !Object.isExtensible(obj) &&
    Object.values(Object.getOwnPropertyDescriptors(obj))
      .every((desc)=>!desc.configurable && !desc.writable);
}

let replaced = {
  isExtensible: Object.isExtensible,
  isSealed,
  isFrozen
};

// map to replaced methods
Object.status = function(obj) { 
  return ['isExtensible', 'isSealed', 'isFrozen']
    .map(key=>[key, replaced[key].call(null,obj)]);
}

// 显示:
//[ [ 'isExtensible', true ],
//  [ 'isSealed', false ],
//  [ 'isFrozen', false ] ]
var obj = {};
console.log(Object.status(obj));

// 显示:
//[ [ 'isExtensible', false ],
//  [ 'isSealed', true ],
//  [ 'isFrozen', true ] ]
Object.preventExtensions(obj);
console.log(Object.status(obj));
