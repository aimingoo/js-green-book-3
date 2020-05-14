function chars() {
  var result = [], c='a'.charCodeAt(0);
  for (var i=0; i<26; i++) {
    result.push(c+i);
  }
  return String.fromCharCode(...result);
}

var str = `the string is "${chars()}"`;
console.log(str);