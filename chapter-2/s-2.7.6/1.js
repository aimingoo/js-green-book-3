/**
 * 示例1：方括号的二义性
 */
a = [ [1] [1] ];
console.log(typeof a, a.length, typeof a[0]);

/**
 * 示例2：方括号的二义性
 */
var table = [
 ['A', 1, 2, 3]     // <-- 这里漏掉了一个逗号
 ['B', 3, 4, 5],
 ['C', 5, 6, 7]
];

console.log(typeof table, table.length, table.join('|'));