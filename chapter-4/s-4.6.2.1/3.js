class Bear {
  dosomething() {
    console.log('AoooO!');
  }
}

class Cat {
  dosomething () {
    console.log('MiaoWuuuu!');
  }
}

class Panda extends Cat {
  go() {
    super.dosomething();
  }
}

// 现在Panda是卖萌的
var x = new Panda;
x.go(); // 'MiaoWuuuu!'

// 显示true，表明当前Panda类的父类是Cat
console.log(Object.getPrototypeOf(Panda.prototype) === Cat.prototype);
// 修改继承关系到Bear 
Object.setPrototypeOf(Panda.prototype, Bear.prototype);

// 现在Panda是凶猛的
x.go(); // 'AoooO!'

