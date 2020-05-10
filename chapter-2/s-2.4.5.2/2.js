/**
 * 显示末10个字符
 */
var str = '12345678910';

my_label: {
  if (str && str.length < 10) {
    break my_label;
  }
  str = str.substr(str.length-10);
}

// other process...
console.log(str);

