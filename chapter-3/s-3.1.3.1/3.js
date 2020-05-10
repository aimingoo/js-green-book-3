// 列举数据成员
var arr = ['a', 'b', 'c', 'd' ]; 
for (var i=0, len=arr.length; i<len; i++) {
  console.log(i, arr[i])
}

// 与上例等效
arr.forEach(function(item, i) {
  console.log(i, item)
})

