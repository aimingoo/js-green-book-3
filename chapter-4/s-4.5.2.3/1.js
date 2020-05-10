// 示例1
my_label: {

function foo(tag) {
  while (tag) break my_label;

  while (true) {
    switch (true) {
      default:
        return;
    }
  }
}

}
console.log('out my_label.')

foo();