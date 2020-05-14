var obj = new ((objType == 'String') ? String
  : (objType == 'Array') ? Array
  : (objType == 'Number') ? Number
  : (objType == 'Boolean') ? Boolean
  : (objType == 'RegExp') ? RegExp
  :  Object
);