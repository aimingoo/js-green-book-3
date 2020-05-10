// 示例2
var i = 0;
my_label : {
  i++;
  while (true) {
    break my_label;
  }
  i = 0;
}
console.log(i);