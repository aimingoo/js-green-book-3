/**
 * 公共函数: 子类派生extend()
 */
extend = function(subClass, baseClass) {
  // 暂存父类构造器
  subClass.baseConstructor = baseClass;
  subClass.base = {};
  // 复制父类特性(属性与方法)
  baseClass.call(subClass.base);
}

/**  * 构建对象系统  */ function Mouse() { /* 测试用 */ }

function Animal(name) {   this.name = name;   this.say = function(message) {     console.log(this.name + ": " + message);   }   this.eat = function() {     this.say("Yum!");   } } 
function Cat() {
  Cat.baseConstructor.call(this, 'cat'); 
  this.eat = function(food) {     if (food instanceof Mouse)
       Cat.base.eat.call(this);     else
       this.say("Yuk! I only eat mice - not " + food.name);   }
} extend(Cat, Animal); 
function Lion() {   Lion.baseConstructor.call(this, 'lion'); } extend(Lion, Cat);

/**  * 测试  */ var cat = new Cat();
var lion = new Lion();
var mouse = new Mouse();
var unknowObj = {name: "shadow"};

cat.eat(mouse);      	// Yum!
cat.eat(unknowObj);  	// Yuk! I only eat mice - not shadow
lion.eat(mouse);     	// Yum!
