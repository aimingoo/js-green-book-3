// 声明一个 "工人(Worker)"类
function Worker() {
  this.headSize = 10;
  this.lossHat = false;
  this.hat = null;
  this.name = 'anonymous';
}

// 声明工人使用的"帽子(Hat)"类
function Hat() {
  this.size = 12;
}

// 有三个工位(或更多)
works = new Array(3);

// 这里有一段业务逻辑，例如给每个工人发帽子，或者工作中丢掉帽子
// works[2] = new Worker();

// 现在检查每个工人的帽子, 给没帽子的工人补发一个
for (var i=0; i<works.length; i++) {
  if (!works[i]) continue;
  if (!works[i].lossHat) continue;

  works[i].hat = new Hat(works[i].name);
  works[i].lossHat = flase;
}

// 建立一个仓库
library = {};
library.hats = function(sex) {
  return [];  //<-- 这里应当返回仓库中的读性别适用的全部帽子的列表
}

breakToHere:
  for (var i=0; i < works.length; i++) {
    if (!works[i]) continue;
    if (!works[i].lossHat) continue;

    // 在仓库中为该工人挑选一顶大小合适的帽子
    var oldHats = library.hats(works.sex);
    for (var j=0; j < oldHats.length; j++) {
      if (oldHats[j] && (oldHats[j].size > works[i].headSize)) {
         works[i].hat = oldHats[j];
         works[i].lossHat = false;
         delete oldHats[j];
        // 挑选成功, 跳到外层循环处理下一个工人
        continue breakToHere;
      }
    }
  }

