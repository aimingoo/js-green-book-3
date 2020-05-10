// 变量N是以值13参与运算
var N = 13;
console.log(N * 2); // 26

// typeof运算符是尝试取值的类型信息
console.log(typeof N); // 'number'

// typeof直接对标识符作运算的
//  - 作用于不存在的标识符
console.log(typeof NNNN); // 'undefined'

//  - 作用于未绑定值的标识符
var NN;
console.log(typeof NN); // 'undefined'

