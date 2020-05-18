// 获得一个promise对象
var p = Promise.resolve(10);

// 将变量p理解为对象，并用在并行系统中
p.then(function(value) {
  console.log(value * 10); // 100
});


// 将promise对象p“转换”为它所代理的数据，并用在特定上下文中
async function foo() {
  console.log(await p * 10); // 100
}

// （又例）
var resolvedObj = Promise.resolve(new Object);
async function foo2() {
  console.log((await resolvedObj).toString());
}
