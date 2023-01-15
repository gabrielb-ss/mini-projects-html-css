const nav = document.querySelector('nav')

let menuIsHidden = true

function toggleMenu () {
  if (menuIsHidden) {
    nav.classList.add("expand")
    menuIsHidden = false
  } else {
    nav.classList.remove("expand")
    menuIsHidden = true
  }
}