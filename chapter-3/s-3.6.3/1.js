// 创建一个新的类类型
class BaseListClass extends MetaClass {}

// 创建一个新的基类
class BaseList extends new BaseListClass{} 

// 子类
class StringList extends BaseList {}


/* 如下代码检测了它们的继承性 */

// 类是类类型的实例
console.log(BaseList instanceof BaseListClass); // true

// 类类型是元类的子类
console.log(MetaClass.isClassOf(BaseListClass)); // true

// 类类型是可以创建类的类（构造器）
console.log(typeof BaseListClass); // function
console.log(typeof (new BaseListClass)); // function
