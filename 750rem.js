;(function(doc,win){
  let docEl = document.documentElement
  let resizeEvt = "orientationchange" in win ? 'orientationchange' : 'resize'
  let resizeFn = () => {
    let clientW = docEl.clientWidth
    if(!clientW) return
    docEl.style.fontSize = 200 * (clientW / 750) + 'px'
  }
  if(!doc.addEventListener) return;
  win.addEventListener(resizeEvt, resizeFn, false)
  doc.addEventListener("DOMContentLoaded", resizeFn, false)
})(document,window)
