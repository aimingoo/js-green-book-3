/**
 * 示例1
 */
// 1. 构造器
function Animal() {};  //动物
function Mammal() {};  //哺乳类
function Canine() {};  //犬科
function Dog() {};  // 狗
function Cat() {};  // 猫

// 2. 原型链表
Mammal.prototype = new Animal();
Canine.prototype = new Mammal();
Dog.prototype = new Canine();
Cat.prototype = new Mammal();

// 3. 示例函数
function isAnimal(obj) {
  return obj instanceof Animal;
}

// 4. 示例代码
var dog = new Dog();
var cat = new Cat();
console.log(isAnimal(dog));

// 5. 原型修改
Animal.prototype.respire = function() { 
  // 交换氧气与二氧化碳
}

// 6. 现在无论是dog，还是cat，都可以呼吸了
console.log( 'respire' in cat );
console.log( 'respire' in dog );
