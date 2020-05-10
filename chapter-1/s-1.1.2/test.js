// 载入浏览器环境模拟
require("./lib/browser-emu.js");

// 示例
function checkInited() {
  if (document.MsgApplet.isInited) {
    self.location.href = "mainpage.htm";
  }
}
setInterval("checkInited()", 50)

