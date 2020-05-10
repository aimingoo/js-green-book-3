var table = [
 ['A', 1, 2, 3]     // <-- 这里漏掉了一个逗号
 ['B', 3, 4, 0],    // 理解为取下标0
 ['C', 5, 6, 7]
];

console.log(typeof table, table.length, table.join('|'));