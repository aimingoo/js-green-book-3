obj = {
  value: 100,
  calc: function() {
    return this.value * 2;
  }
}
// 输出: 200
console.log(obj.calc());

