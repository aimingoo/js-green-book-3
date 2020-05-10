var obj = {};

function _in(obj, prop) {
  if (obj[prop]) return true;
  return false; 
}

// 检测不存在的属性
console.log( _in(obj, 'myProp') );  // false

// 检测某些有值的属性, 仍会返回false
var propertyNames = [0, '', [], false, undefined, null];
for (var i=0; i<propertyNames.length; i++) { 
  console.log( _in(obj, propertyNames[i]) ); // all `false`
}