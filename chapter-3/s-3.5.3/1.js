Object.status = function(obj) { 
  return ['isExtensible', 'isSealed', 'isFrozen']
    .map(key=>[key, Object[key].call(null,obj)]);
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