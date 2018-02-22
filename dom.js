//获取元素样式计算后的值
export function getStyle(element, attr) {
    return element.currentStyle 
      ? element.currentStyle[attr] 
      : window.getComputedStyle(element, null)[attr];
}

//通过id 获取元素
export function getEleId(id) {
  return document.getElementById(id)
}

/**
 * 是否有class
 * @method hasClass
 * @param  {[type]}  el        获取的元素
 * @param  {[type]}  className class名
 * @return {Boolean}           是否有class名
 */
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

//添加class
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

//获取或者添加data-自定义属性
//string = element.dataset.camelCasedName;
//element.dataset.camelCasedName = string;
export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}

//js中 transform 浏览器兼容的写法
let elementStyle = document.createElement('div').style

let vendor = (() => {//供应商
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

//获取dpr
export function px(){
  console.log(window.devicePixelRatio)
}
