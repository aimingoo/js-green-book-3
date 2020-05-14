var objType = _get_from_Input();
var Class = (objType == 'String') ? String
  : (objType == 'Array') ? Array
  : (objType == 'Number') ? Number
  : (objType == 'Boolean') ? Boolean
  : (objType == 'RegExp') ? RegExp
  : Object;
var obj = new Class();