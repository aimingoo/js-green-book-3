// 当使用radix=16时可以省掉“0x”前缀
console.log(parseInt('0x13', 16)); // 19
console.log(parseInt('13', 16)); // 19

// 使用'0x'前缀时可以不指定radix
console.log(parseInt('0x13')); // 19
console.log(parseInt('013'));  // 13