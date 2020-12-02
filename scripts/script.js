//HAMBURGER VARIABLES
const hamburger = document.querySelector('#header__hamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const fadeElements = document.querySelectorAll('.has-fade')
const heroImage = document.querySelector('.hero__image')

// MENU VARIABLES DESKTOP
const inicio = document.querySelector('#inicio')
const quemSomos = document.querySelector('#quem-somos')
const portifolio = document.querySelector('#portifolio')
const faq = document.querySelector('#faq')
const entrarEmContato = document.querySelector('#button')


// MENU VARIABLES MOBILE
const inicioMobile = document.querySelector('#inicio-mobile')
const quemSomosMobile = document.querySelector('#quem-somos-mobile')
const portifolioMobile = document.querySelector('#portifolio-mobile')
const faqMobile = document.querySelector('#faq-mobile')
const entrarEmContatoMobile = document.querySelector('#button-mobile')

// HAMBURGER EVENTS
hamburger.addEventListener('click', () => {
    if (header.classList.contains('open')) { // Close Hamburger menu
        header.classList.remove('open')
        body.classList.remove('noscroll')
        fadeElements.forEach((element) => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })

    } else {
        header.classList.add('open') // Open Hamburger Menu
        body.classList.add('noscroll')
        fadeElements.forEach((element) => {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })

    }
})

// ON RESIZE WINDOW -> CLOSE THE OPEN MENU
body.onresize = () => {
    var screenWidth = window.screen.width;
    if (screenWidth >= 1024) {
        if (header.classList.contains('open')) { // Close Hamburger menu
            header.classList.remove('open')
            body.classList.remove('noscroll')
            fadeElements.forEach((element) => {
                element.classList.remove('fade-in')
                element.classList.add('fade-out')
            })
        }
    }
}

// Smooth Slide Menu Desktop

let arrayMenu = [inicio, quemSomos, portifolio, faq, entrarEmContato]

arrayMenu.forEach((element) => {
    element.addEventListener('click', () => {

            if (element.id == 'inicio') {
                scroll({
                    top: 0,
                    behavior: "smooth"
                })
            } else if(element.id === 'quem-somos') {
                scroll({
                    top: 850,
                    behavior: "smooth"
                })
            } else if(element.id == 'portifolio') {
                scroll({
                    top: 1650,
                    behavior: "smooth"
                })

           } else if(element.id == 'faq') {
                scroll({
                    top: 2300,
                    behavior: "smooth"
            })

           }
            
            else if(element.id == 'button') {
                scroll({
                    top: 3000,
                    behavior: "smooth"
                })
                
            } else {
                scroll({
                    top: 0,
                    behavior: "smooth"
                })
            }
        } )
    })

// Smooth Slide Menu Mobile
let arrayMenuMobile = [inicioMobile, quemSomosMobile, portifolioMobile, faqMobile, entrarEmContatoMobile]

arrayMenuMobile.forEach((element) => {
    element.onclick = () => {
        if (element.id == 'inicio-mobile') {
            header.classList.remove('open')
            body.classList.remove('noscroll')
            fadeElements.forEach((element) => {
                element.classList.remove('fade-in')
                element.classList.add('fade-out')
            })
            scroll({
                top: 0,
                behavior: "smooth"
            })

        } else if(element.id === 'quem-somos-mobile') {
            header.classList.remove('open')
            body.classList.remove('noscroll')
            fadeElements.forEach((element) => {
                element.classList.remove('fade-in')
                element.classList.add('fade-out')
            })

            if (window.innerHeight <= 1024) { // iPad
                scroll({
                    top: 1280,
                    behavior: "smooth"
                }) 

            } if (window.innerHeight <= 820) { // iPhone X <
                scroll({
                    top: 1350,
                    behavior: "smooth"
                }) 
            }
            
            
        } else if(element.id == 'portifolio-mobile') {
            header.classList.remove('open')
            body.classList.remove('noscroll')
            fadeElements.forEach((element) => {
                element.classList.remove('fade-in')
                element.classList.add('fade-out')
            })
            
            if (window.innerHeight <= 1024) { // iPad
                scroll({
                    top: 2153,
                    behavior: "smooth"
                }) 

            } if (window.innerHeight <= 820) { // iPhone X <
                scroll({
                    top: 2300, // ARRUMAR AQUIIIIIIIIIIIIII
                    behavior: "smooth"
                }) 
            }
        } else if (element.id == 'faq-mobile') {
            header.classList.remove('open')
            body.classList.remove('noscroll')
            fadeElements.forEach((element) => {
                element.classList.remove('fade-in')
                element.classList.add('fade-out')
            })
            if (window.innerHeight <= 1024) { // iPad
                scroll({
                    top: 3080, 
                    behavior: "smooth"
                }) 

            } if (window.innerHeight <= 820) { // iPhone X <
                scroll({
                    top: 4350,
                    behavior: "smooth"
                }) 
            }
        }
        
        else if(element.id == 'button-mobile') {
                    
            if (window.innerHeight <= 1024) { // iPad
                scroll({
                    top: 3430,
                    behavior: "smooth"
                }) 

            } if (window.innerHeight <= 820) { // iPhone X <
                scroll({
                    top: 4800,
                    behavior: "smooth"
                }) 
            }
        } else {
            scroll({
                top: 0,
                behavior: "smooth"
            })
    }
}})