var table = [
 ['A', 1, 2, 3]     // <-- 这里漏掉了一个逗号
 ['B','length'],    // 理解为取属性'length'
 ['C', 5, 6, 7]
];

console.log(typeof table, table.length, table.join('|'));