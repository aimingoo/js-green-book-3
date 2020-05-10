// 构造器声明
function MyObject() {}

// 构造完成后并没有成员'name'
var obj = new MyObject();
console.log('name' in obj);

// 效果：对象实例通过原型得到了成员'name'
MyObject.prototype.name = 'MyObject';
console.log('name' in obj);
