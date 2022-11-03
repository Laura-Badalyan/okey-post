
import {  paralaxFunc } from "./modules/paralax.js";


const   observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.contains('.partniorOrder__orderRacet') 
                document.querySelector(".partniorOrder__orderRacet").classList.add("partniorOrder__orderRacet--active")
                setTimeout(function () {
                    document.querySelector('.partniorOrder__orderRacet').style.animation = 'none';
                    paralaxFunc('.parallax', ['.partniorOrder__orderRacet']);
                }, 2500)
            }
       
    });
});
let served = document.querySelectorAll('.partniorOrder')
served.forEach(serve => {

    observer.observe(serve);
})

