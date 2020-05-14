var arr = new Array(1000*10000);   // 1000万个元素
arr[1] = 3;
arr[3] = 1;
arr[5] = 5;
arr[9999] = 9;

function func(lv, rv) {
  console.log(lv + ", " + rv);
  return lv > rv ? 1 : (lv==rv ? 0 : -1);
}

arr.sort(func);