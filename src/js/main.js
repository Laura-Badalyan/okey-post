import {
    burgerMenu
} from "./modules/burgerMenu.js";
// import * as parallax from "./modules/mainHeader.js";
import {
    paralaxFunc
} from "./modules/paralax.js";
import {
    sliderFunc,
} from './modules/sliders.js'
import {
    accordionFunc
} from './modules/accordion.js'
import {
    calculator
} from "./modules/calculator.js";
import {
    emailValidation
} from "./modules/emailValidation.js";
import {scrollIntoView} from "./modules/scrollIntoView.js"

//parallax
window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.mainHeader_animationMan').style.animation = 'none';
        document.querySelector('.mainHeader_animationPlane').style.animation = 'none';
        paralaxFunc('.parallax', ['.mainHeader_animationMan', '.mainHeader_animationPlane']);

    }, 3000)

});
paralaxFunc('.parallax', ['.mainOrder__parallaxGirl'], );
paralaxFunc('.parallax', ['.mainOrderSecond__parallaxTv'], );


// scroll functions
scrollIntoView('.mainHeader_orderBtn','.mainAddress')
scrollIntoView('.mainOrder__orderBtn','.mainCalculator')

// // category slider
sliderFunc('.categorySlider__slides', '.categorySlider__slide', '.categorySlider__arrowLeftBtn', '.categorySlider__arrowRightBtn', 6)
// // productSlider
sliderFunc('.productSlider__slides', '.productSlider__slide', '.productSlider__leftBtn', '.productSlider__rightBtn', 1)


accordionFunc('.contentItem__itemDescription', 'contentItem__description', 'contentItem__arrows', 'contentItem__mobileArrowIcon', '.contentItem', '.contentItem__pricing', 'mainDeliveryOptions-open')

calculator()

//mailValidation
emailValidation()