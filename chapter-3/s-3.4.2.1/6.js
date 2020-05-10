var obj = {
  showThis: function() {
    console.log(this);
  }
}

// 示例6. 严格模式下的this引用
function showInStrict() {
   'use strict';
   console.log(this);
}