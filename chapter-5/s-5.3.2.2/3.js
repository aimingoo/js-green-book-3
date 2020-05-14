// 示例6

function* myGenerator2(x) {
  console.log('in generator:', yield 2*x);
  console.log('again:', [yield]);
}

var tor = myGenerator2(10);