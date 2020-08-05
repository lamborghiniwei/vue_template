//  将数据存储到本地存储
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

//  根据key取出本地存储的数据
export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

//  删除某个key的数据
export const clearItem = (key) => {
  localStorage.removeItem(key)
}

//  清空本地存储
export const clear = () => {
  localStorage.clear()
}
