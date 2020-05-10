// 在字面量风格的对象声明中直接引用变量名
var career = 'programmer';
var profile = {career};

// 相当于
profile = {'career': career}

// 使用with闭包中的标识符
var obj = {age: 32};
with (obj) {
  profile = {career, age}; // career使用变量名，age使用obj.age属性
}

// 直接在声明中引用变量profile
me = {profile};

// 通过自定义的属性来引用profile对象
// (与上面效果相同)
me = {profile: profile}

// 对象展开
// （与上面效果不同，info对象复制了profile所有的对象成员，但不引用对象自身）
info = {...profile};