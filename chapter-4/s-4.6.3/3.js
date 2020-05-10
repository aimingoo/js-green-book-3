var x = 100;
class MyObject {
  get x() {
    return x;
  }
}

var a = new MyObject;
console.log(a.x);