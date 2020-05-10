function Bird() {
  this.wing = 2;
  this.tweet = function() { };
  this.fly = function() {
    console.log('I can fly.');
  }
}

function asBird(x) {
  Bird.call(x);
  return x;
}

function isBird(instance) {
  return instance instanceof Bird;
}

function doFly(me) {
  if (!isBird(me)) {
    throw new Error('对象不是Bird或其子类的实例.');
  }
  me.fly();
}