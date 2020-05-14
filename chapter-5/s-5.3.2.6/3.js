function MyObject(src) {
  console.log('Construct by', src);
  console.log(Object.getPrototypeOf(this) === MyObject.prototype);
  console.log(new.target === MyObject);
}