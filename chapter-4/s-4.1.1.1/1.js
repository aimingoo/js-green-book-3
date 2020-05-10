/**
 * key, 一个值，例如字符
 * table, 一个数组，例如字符数组
 */
function SearchInTable(key, table) {
  for (var i=0; i<table.length; i++) {
    if (table[i] == key) return true;
  }
  return false;
}
