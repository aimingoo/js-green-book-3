var objType = _get_from_Input();

switch (objType) {
  case 'String': {
    obj = new String();
    break;
  }

  case 'Number': {
    // ...
  }
  
  // ...
  default: {
    obj = new Object();
  }
}