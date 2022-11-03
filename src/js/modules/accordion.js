export function accordionFunc(itemDescription, description, iconBlock, iconitem, contentItem, contentBlock, openItem) {
    document.querySelectorAll(itemDescription).forEach(titleitem => {
        titleitem.addEventListener('click', () => {
            titleitem.querySelector('.'+description).classList.toggle(description + '--active')
            titleitem.querySelector('.'+iconBlock).classList.toggle(iconBlock+'--active')
            titleitem.querySelector('.'+iconitem).classList.toggle(iconitem+'--active')
        })
    })
    let accordionItems = document.querySelectorAll(contentItem)
    accordionItems.forEach((item) => {
        let accordionHeader = item.querySelector(itemDescription)
        accordionHeader.addEventListener('click', () => {
            toggleItem(item)
        })
    })
    const toggleItem = (item) => {
        const accordionContent = item.querySelector(contentBlock)
        if (item.classList.contains(openItem)) {
            accordionContent.removeAttribute('style')
            item.classList.remove(openItem)
        } else {
            accordionContent.style.height = accordionContent.scrollHeight + 'px'
            item.classList.add(openItem)
        }
    }
}