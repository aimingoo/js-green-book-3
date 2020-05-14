let versions = process.versions
  ? new Map(Object.entries(process.versions)
  	  .map(([key, value]) => [key, parseFloat(value)]))
  : new Map(); // empty

module.exports = {
  get resolved() {
    return (RegExp('/(s-[0-9.]{1,})/', 'g')
      .exec((module.parent || "").filename) || [])[1];
  },
  versions(app, expr='') {
  	return eval(`${versions.get(app)} ${expr}`);
  }
}
