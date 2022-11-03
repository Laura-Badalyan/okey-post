import {burgerMenu} from "./modules/burgerMenu.js";
import {accordionFunc} from './modules/accordion.js'
import {isWebp} from './modules/webpFunc.js';
import {navLinksActivate} from './modules/navLinksActivate.js'


isWebp();


navLinksActivate()
//burger menu
burgerMenu()

accordionFunc('.globalFooterAccordionItem__header', 'globalFooterAccordionItem__title', 'globalFooterAccordionIcon', 'globalFooterAccordionIcon__item', '.globalFooterAccordionItem__item', '.globalFooterAccordionItem__content', 'globalFooterAccordionItem-open')