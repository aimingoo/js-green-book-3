// （需要装载../s-3.4.1.2/1.js）

// 在子类覆盖父类方法时，使用方法继承
class Ostrich extends Bird {
  fly() {
    super.fly(); // I can fly now!
  }
}
