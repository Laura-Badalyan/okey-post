export const burgerMenu = ()=>{
    document.querySelector(".buttonBurger").addEventListener("click", (e)=> {
        // e.preventDefault();
        document.querySelector(".buttonBurger__burger").classList.toggle("buttonBurger__burger--active")
        document.querySelector(".mobileMenu").classList.toggle("mobileMenu__show")
        // document.querySelector(".mobileMenu").classList.toggle("mobileMenu__hide")
        document.querySelector(".navMobile").classList.toggle("navMobile__show")
    })
}