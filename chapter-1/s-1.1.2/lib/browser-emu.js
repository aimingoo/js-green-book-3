// 模拟browser环境
let browser = Function('return this')();
let _timers = []; 

browser.document = { MsgApplet: { isInited: false } };

browser.self = {
  location: {
    set href(url) {
      delete this.href; // will redirect, and
      _timers.forEach(t=>clearInterval(t)); // drop timers
      console.log('Jump to: ', url);
    }
  }
};

// 模拟msgApplet的载入效果
setTimeout(function() {
  document.MsgApplet.isInited = true;
}, 2000);

// 兼容性修补: 浏览器环境setInterval支持字符串参数
browser.setInterval = function(orginal) {
  return function(func, ...args) {
    let f = func instanceof Function ? func : Function(func);
    let len = _timers.push(orginal(f), ...args);
    return _timers[len-1];
  }
}(setInterval);
