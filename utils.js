//产生随机数
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//重新随机排列数组
function shuffle(arr) {
  // let [ ..._arr ]= arr
  // let _arr = arr.concat()
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}
