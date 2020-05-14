function foo(name) {
  console.log('hi, ' + name);
}

// 示例: call与apply的一般性使用
foo.call(null, 'Guest');
foo.apply(null, ['Guest']);