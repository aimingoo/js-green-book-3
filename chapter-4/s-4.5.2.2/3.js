// 示例3
var i = 0;
my_label : {
  i++;
  switch (true) {
    case false:
      break;
    case true:
      break my_label;
  }
  i = 0;
}
console.log(i);