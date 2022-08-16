function Start() {
    let el = document.getElementById('maincanvas')
    el.style.height = window.innerHeight + 'px'
    el.style.width = window.innerHeight + 'px'

    window.addEventListener('resize', () => {
      el.style.height = window.innerHeight + 'px'
      el.style.width = window.innerHeight + 'px'
    })
}