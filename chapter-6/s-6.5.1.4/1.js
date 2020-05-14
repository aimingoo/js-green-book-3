var obj = {};

Object.defineProperty(obj, 'x', {value: 100, configurable: true});

// obj.x是只读的, 输出：false
console.log(Object.getOwnPropertyDescriptor(obj, 'x').writable);

// 尝试重写
obj.x = 200;

// 内部方法[[Set]]将忽略上述的写操作
console.log(obj.x); // 100

obj = new Proxy(obj, {
  set(target, key, value) {
    if (key === 'x' &&
      Object.getOwnPropertyDescriptor(target, key).configurable) {
        return Reflect.defineProperty(target, key, {value});
    }
    return Reflect.set(target, key, value);
  }
});

// 测试如下
// 写值
obj.x = 2000;

// 取值
console.log(obj.x); // 2000

// 检查属性的性质
console.log(Object.getOwnPropertyDescriptor(obj, 'x')); // { value: 2000, ...