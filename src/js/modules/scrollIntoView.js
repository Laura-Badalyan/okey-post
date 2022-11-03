export const scrollIntoView = function (btn,section) {
    document.querySelector(btn).addEventListener('click', () => {
        document.querySelector(section).scrollIntoView({
            behavior: 'smooth'
        });
    })
}