class Separator {
  [Symbol. split](str, limit) {
    return str.split(this.separator||' ', limit)
}
}

var tor = new Separator();
console.log('hello world'.split(tor));

tor.separator = ',';
console.log('hi,friend'.split(tor));

