Array.prototype.clear = function(len) {
  len = this.length;
  if (len > 0) {
    this.splice(0, len);
  }
}
