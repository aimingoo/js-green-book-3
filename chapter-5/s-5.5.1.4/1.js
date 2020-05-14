var checker;

function myFunc() {
  if (checker) {
    checker();
  }

  console.log('do myFunc: ' + str);
  var str = 'test.';

  if (!checker) {
    checker = function() {
      console.log('do Check:' + str);
    }
  }

  return arguments.callee;
}

// 连续执行两次myFunc()
myFunc()();