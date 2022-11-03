export function shopPagination() {
    let navigation = document.querySelector(".pagination");
    let shopsPage = document.querySelector(".shopsPage");
    let content = document.querySelector(".shopsPage .shopsPage__brandContent");

    let navcount = content.offsetWidth / shopsPage.offsetWidth;
    let previous = document.querySelector(".shopsPagination__previous");
    let next = document.querySelector(".shopsPagination__next");
    for (let i = 1; i <= navcount; i++) {
        let num = document.createElement("span");
        num.className = "shopsPagination__num";
        num.dataset.index = i;
        num.textContent = i;
        next.before(num);
    }
    previous.nextElementSibling.classList.add("shopsPagination__selected");
    let nums = Array.from(document.querySelectorAll(".shopsPagination__num"));

    next.addEventListener("click", function () {
        let current = document.querySelector(".shopsPagination__selected");
        if (nums.indexOf(current) + 1 < nums.length) {
            nums.forEach((e) => {
                e.classList.remove("shopsPagination__selected");
            });

            current.nextElementSibling.classList.add("shopsPagination__selected");
            content.style.transform = `translateX(${
                current.dataset.index * -shopsPage.offsetWidth
            }px)`;
        }
    });
    previous.addEventListener("click", function () {
        let current = document.querySelector(".shopsPagination__selected");
        if (nums.indexOf(current) > 0) {
            nums.forEach((e) => {
                e.classList.remove("shopsPagination__selected");
            });
            content.style.transform = `translateX(${
                (current.dataset.index - 2) * -shopsPage.offsetWidth
            }px)`;
            current.previousElementSibling.classList.add("shopsPagination__selected");
        }
    });
    nums.forEach((e) => {
        e.addEventListener("click", function () {
            nums.forEach((e) => {
                e.classList.remove("shopsPagination__selected");
            });
            e.classList.add("shopsPagination__selected");
            content.style.transform = `translateX(${
                nums.indexOf(e) * -shopsPage.offsetWidth
            }px)`;
        });
    });
}
// line 29
document.querySelectorAll('.paginationBlock').forEach(item => {
    item.childNodes[0].data = ''
})