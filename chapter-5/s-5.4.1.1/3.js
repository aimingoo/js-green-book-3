// 例3，（或）父类/祖先类最终只可能是如下两种声明之一
// - class AncestorClass {}
class AncestorClass extends null {}

// 以其他类作为父类
class ParentClass extends AncestorClass {}

// 子类声明
class MyClass extends ParentClass {}