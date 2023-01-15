const paragraphs = document.querySelectorAll('p')
const logo= document.querySelector("#logo-menu")
const nav = document.querySelector('nav')

let menuIsHidden = false

function toggleMenu () {
  if (menuIsHidden) {
    menuIsHidden = false
    logo.classList.remove("hide-logo")
    paragraphs.forEach(paragraph => {
      paragraph.classList.remove('hide')
      paragraph.classList.add('show')
    })
    nav.classList.remove("shrink")
  } else {
    menuIsHidden = true
    logo.classList.add("hide-logo")
    paragraphs.forEach(paragraph => {
      paragraph.classList.remove('show')
      paragraph.classList.add('hide')
    })
    nav.classList.add("shrink")
  }
}



/*if(!logo.classList.contains("hide")) {
  logo.classList.add("hide", "hide-logo")
  paragraphs.forEach(paragraph => {
    if(paragraph.classList.contains('show')) {
      paragraph.classList.remove('show')
    }
    paragraph.classList.add('hide')
  })
  nav.classList.add("shrink")
} else {
  logo.classList.remove("hide-logo")
  paragraphs.forEach(paragraph => { 
    if(paragraph.classList.contains('hide')) {
      paragraph.classList.remove("hide", "hide-logo")
    }
    paragraph.classList.add('show') 
 
    
  })
  nav.classList.remove("shrink")
}
*/