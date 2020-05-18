// 例3：使用异步函数来实现示例2
var p1 = Promise.resolve(1);

async function foo() {
  var x = await p1; // pick <v1> from p1
  return (x < 9) ? '0' + x : x.toString();
}

// p2 = foo();
p3 = foo().then(v2 => {
  return 'v3: ' + v2;  // resolve value for p3
});

