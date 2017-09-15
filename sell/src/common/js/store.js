export function saveToLocal(id, key, value) {
  let seller = window.localStorage.__seller__
  if (!seller) {
    seller = {}
    seller[id] = {}
  } else {
    // seller解析成JS对象
    seller = JSON.parse(seller)
    if (!seller[id]) {
      seller[id] = {}
    }
  }
  seller[id][key] = value
  // localStorage不能存储对象，所以转成JSON字符串
  window.localStorage.__seller__ = JSON.stringify(seller)
}

export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__
  if (!seller) {
    return def
  }
  seller = JSON.parse(seller)[id]
  if (!seller) {
    return def
  }
  let ret = seller[key]
  return ret || def
}
