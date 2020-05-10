var arr = ['a', 'b', 'c'];

// 数据
for (var value of arr) {
  console.log(value);
}

// 集
for (var member of new Set(arr)) {
  console.log(member);
}

for (var chr of 'AbC') console.log(chr);
