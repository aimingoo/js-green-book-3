// 本示例说明标符的范围将越过注释语句
my_label_2:
/*
  hello, world;
*/
if (true) {
  console.log('hello, is a test!');
  break my_label_2;
  console.log('skip me');
}
console.log('to here.');
