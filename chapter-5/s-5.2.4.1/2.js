function chars() {
  var result = [], c='a'.charCodeAt(0);
  for (var i=0; i<26; i++) {
    result.push(c+i);
  }
  return String.fromCharCode(...result);
}

// （续上例）
var str2 = `the strings is:\n${
  (function() {
    return new Array(3).fill(chars());
  })().join('\n')
}`;
console.log(str2);