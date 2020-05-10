// file: funcs.mjs
export function foo() {
  return this;
}
export var f2 = () => {
  return this;
}
console.log(this); // <- 这里会是undefined

