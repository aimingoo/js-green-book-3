// 示例1
var i = 0;
my_label : {
  i++;
  break my_label;
  i = 0;
}
console.log(i);