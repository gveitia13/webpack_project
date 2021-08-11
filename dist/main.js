(() => {
  'use strict'
  var e = {}
  e.g = function () {
    if ('object' == typeof globalThis) return globalThis
    try {return this || new Function('return this')()} catch (e) {if ('object' == typeof window) return window}
  }(), (() => {
    var t
    e.g.importScripts && (t = e.g.location + '')
    var r = e.g.document
    if (!t && r && (r.currentScript && (t = r.currentScript.src), !t)) {
      var n = r.getElementsByTagName('script')
      n.length && (t = n[n.length - 1].src)
    }
    if (!t) throw new Error('Automatic publicPath is not supported in this browser')
    t = t.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^\/]+$/, '/'), e.p = t
  })()
  const t = e.p + 'assets/webstorm.svg', r = e.p + 'assets/image-grande.png'
  var n
  console.log('test webpack'), (n = console).log.apply(n, [1, 2, 3])
  var c = document, a = c.getElementById('app'), o = c.createElement('h1'), i = c.createElement('img'),
    s = c.createElement('img')
  o.textContent = 'Hola Mundo con webpack', i.src = t, i.classList.add('icon'), s.src = r, a.appendChild(o), a.appendChild(i), a.appendChild(s)
})()