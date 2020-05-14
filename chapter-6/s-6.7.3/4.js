function foo() {
  console.log(arguments.length, ...arguments);
}

// 测试如下：

// 总是绑定前三个参数
f = foo.bind(null, 1, 2, 3);

// 添加两个新参数，一共5个
f('a', 'b'); // 5 1 2 3 'a' 'b'

// 添加0个新参数
f(); // 3 1 2 3

// 再次绑定，并叠加两个参数
f2 = f.bind(new Object, 'a', 'b')

// 现在有5个绑定过的参数了，再添加2个动态的
f2('x', 'y'); // 7 1 2 3 'a' 'b' 'x' 'y'