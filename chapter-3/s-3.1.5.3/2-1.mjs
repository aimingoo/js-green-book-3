// 模块C
var symbolPropName = Symbol();
export var obj = { [symbolPropName]: 100 };

// 必须导出标识符symbolPropName以访问对应的属性
export { symbolPropName };
