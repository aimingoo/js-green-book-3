obj4 = Object.defineProperty(new Object, 'data', {
  async ["get"]() {
    return 100;
  }
});

obj4.data.then(console.log);
