export function getStrDate(str) {
  var reg = /\[(.*?)\]/g
  var date = reg.exec(str)
  console.log('date', date[1]);
  return date[1];
}

export function getTitle(str) {
  return str.replace(/\.\w+$/, '').replace(/\[(.*?)\]/, '')
}
