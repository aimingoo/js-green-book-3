// （需要装载../s-3.4.1.2/1.js）

// （续前例）
function Ostrich() {
  this.fly = function() {
    console.log('I can\'t fly.');
  }
}
Ostrich.prototype = new Bird();
Ostrich.prototype.constructor = Ostrich;