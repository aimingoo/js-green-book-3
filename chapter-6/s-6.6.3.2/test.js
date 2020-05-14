// 示例2：eval访问全局中的arguments
try {
  x = 100;
}
catch(e) {
  console.log("in strict:", e.message);
}
finally {
  console.log("now, x is:", typeof x);
}

function foo() {
  var obj = {eval};
  obj.eval(`
    try {
      x = 100;
    }
    finally {
      console.log("in obj.eval, x is:", x);
    }
  `);
}

foo();
console.log("in global, x is:", x);

