
export const navLinksActivate = function() {
    const navLinks = document.querySelectorAll('.mobileMenu__link,.navMenu__link')
    const url = window.location.href
    navLinks.forEach(el => {
        const activeClass = `${el.className}--active`
        if(url.includes(el.href)){
            el.classList.add(activeClass)
        } else {
            el.classList.remove(activeClass)

        }
    })
}