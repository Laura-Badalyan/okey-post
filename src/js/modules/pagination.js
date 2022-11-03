export const pagination = function (itemClass, itemsCount) {
    const numBtnClass = '.globalPageBtns__numBtn'
    const items = document.querySelectorAll(itemClass)
    const numBtns = document.querySelectorAll(numBtnClass)
    const arrowLeftBtn = document.querySelector('.globalPageBtns__arrowLeftBtn')
    const arrowRightBtn = document.querySelector('.globalPageBtns__arrowRightBtn')
    const numBtnActiveClass = `${numBtnClass}_active`
    const itemsCopy = Array.from(items)

    let curPage = 1


    const changePage = () => {
        const sliceFrom = (curPage - 1) * itemsCount
        const sliceTo = itemsCount * curPage
        const slicedArr = itemsCopy.slice(sliceFrom, sliceTo)
        items.forEach(el => {
            setTimeout(() => {
                if (slicedArr.includes(el)) {
                    el.classList.add(`${itemClass.slice(1)}_active`)
                } else {
                    el.classList.remove(`${itemClass.slice(1)}_active`)
                }
            },250)
            const animProgress = [{
                    transform: 'scale(1)'
                },
                {
                    transform: 'scale(0.5)'
                },
                {
                    transform: 'scale(1)'
                }
            ];
            const animOptions = {
                duration: 500,
                iterations: 1,
            }
            el.animate(animProgress,animOptions)
        })
    }

    const arrowFunc = function (isLeft) {
        numBtns.forEach(el => el.classList.remove(numBtnActiveClass.slice(1)))
        if (isLeft) {
            curPage > 1 ? curPage-- : curPage = numBtns.length
        } else {
            curPage < numBtns.length ? curPage++ : curPage = 1
        }
        numBtns[curPage - 1].classList.add(numBtnActiveClass.slice(1))
        changePage()
    }

    changePage()

    numBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            numBtns.forEach(el => el.classList.remove(numBtnActiveClass.slice(1)))
            btn.classList.add(numBtnActiveClass.slice(1))
            const numBtnActive = document.querySelector(numBtnActiveClass)
            curPage = +numBtnActive.textContent

            changePage()
        })
    })

    arrowLeftBtn.addEventListener('click', () => {
        arrowFunc(true)
    })
    arrowRightBtn.addEventListener('click', () => {
        arrowFunc(false)

    })
}