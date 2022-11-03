const add_new = () =>{
    add_bg.classList.remove("dNone")
    add_block.classList.remove("dNone")
    save.classList.remove("dNone")
}
const add_save = ()=>{
    let tr = document.createElement("tr")
    let addSelect = document.querySelector(".addBlock__select")
    tr.classList.add("tableBody__row")
    addBlockItems.forEach((item,index)=>{
        if(item.ariaPlaceholder === "Статус"){
            return
        }
        let td = document.createElement("td")
        td.classList.add("tableBody__item")
        if(item.placeholder === "Статус"){
            let a =  document.createElement("a")
            a.classList.add("tableBody__item--link")
            let img =  document.createElement("img")
            img.classList.add("tableBody__item--download")
            img.setAttribute("src", "static/images/general/download.svg")
            a.append(img)
            let img2 =  document.createElement("img")
            img2.classList.add("tableBody__item--delete")
            img2.setAttribute("src", "static/images/general/delete.svg")
            let div =  document.createElement("div")
            div.classList.add("tableBody__item--status")
            td.append(a)
            td.append(img2)
            td.append(div)
        }
        else if(item.placeholder === "Проекты URL"){
            let img =  document.createElement("img")
            img.setAttribute("src", "static/images/general/"+item.value)
            img.classList.add("tableBody__item--img")
            let span =  document.createElement("span")
            span.classList.add("tableBody__item--category")
            span.innerText = addSelect.value
            td.append(img)
            td.append(span)
        }
        else{
            td.innerHTML = item.value
        }
        tr.append(td)

        if (index === addBlockItems.length-1){
            table.prepend(tr)
            addBlockItems.forEach((item)=>{
                item.value = ""
                console.log(item.innerHTML)
            })
        }

    })
    add_bg.classList.add("dNone")
    add_block.classList.add("dNone")
    save.classList.add("dNone")
}
const table = document.querySelector(".tableBody")
const add_bg = document.querySelector(".add__bg")
const add_block = document.querySelector(".addBlock")
const add_btn= document.querySelector(".dataTable__add")
const cross = document.querySelector(".addBlock__cross")
const addBlockItems = document.querySelectorAll(".addBlock__input")
const save = document.querySelector(".add__save")
save.addEventListener("click",add_save)
add_bg.classList.add("dNone")
add_block.classList.add("dNone")
save.classList.add("dNone")
cross.onclick = ()=>{
    add_bg.classList.add("dNone")
    add_block.classList.add("dNone")
    save.classList.add("dNone")
}
add_btn.addEventListener("click",add_new)

