var str = new String('hi');
console.log(str);

// 显示'101'，而不是预期的'100hi'
str[Symbol.toPrimitive] = ()=> 1;
console.log(100+str);

// 显示false, 这意味着instanceof检测对所有MyString()的实例都失效了
class MyString extends String {
  static [Symbol.hasInstance]() { return false }
}
console.log(new MyString instanceof MyString); // false

// 可用defineProperty()方法声明，以避免添加属性时受原型性质的影响（例如内建类）
Object.defineProperty(String, Symbol.hasInstance, {value:()=>false});
console.log(new String instanceof String); // false

