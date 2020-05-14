Number.prototype.showDataType = function() {
  console.log('value:'+ this + ',  type:' + (typeof this));
}

var n1 = 100;
console.log(typeof n1);
n1.showDataType();