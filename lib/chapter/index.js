module.exports = {
  get resolved() {
    return (RegExp('/(s-[0-9.]{1,})/', 'g')
      .exec((module.parent || "").filename) || [])[1];
  }
}