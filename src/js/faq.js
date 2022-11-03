import {accordionFunc} from './modules/accordion.js'

accordionFunc('.faqAccordionItem__header', 'faqAccordionItem__title', 'faqAccordionIcon', 'faqAccordionIcon__item', '.faqAccordionItem__item', '.faqAccordionItem__content', 'faqAccordionItem-open');
let searchInput = document.querySelector('.searchBlock__input');
let answers = document.querySelectorAll('.faqAccordionItem__content');
answers.forEach(answer => {
    searchInput.addEventListener('input', () => {
        if (!answer.innerText.toLowerCase().includes(searchInput.value.toLowerCase())) {
            answer.parentNode.style.display = 'none';
            let parentBlock = answer.closest('div.faqAccordionItem__container');
            parentBlock.querySelector('.faqAccordion__headText').style.display = 'none';
            parentBlock.style.marginBottom = '0';
        } else {
            answer.parentNode.style.display = 'block';
            let parentBlock = answer.closest('div.faqAccordionItem__container');
            parentBlock.querySelector('.faqAccordion__headText').style.display = 'block';
        }
    })
})