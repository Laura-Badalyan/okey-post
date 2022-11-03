//admin_settings
let admin_avatar = document.querySelector(".navProfile__avatar--img")
let admin_settings = document.querySelector(".admin")
admin_settings.classList.add("dNone")
admin_avatar.onmouseover = function () {
    admin_settings.classList.remove("dNone")
}
admin_settings.onmouseover = function () {
    admin_settings.classList.remove("dNone")
}
admin_avatar.onmouseout = function () {
    admin_settings.classList.add("dNone")
}
admin_settings.onmouseout = function () {
    admin_settings.classList.add("dNone")
}
//admin_settings

//admin info changing
let new_picture = document.querySelector(".profileInfo__upload")
let changePhoto = function (new_picture, where) {
    // console.log(new_picture.value)
    if (new_picture.files && new_picture.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            if (where.hasAttribute("src")) {
                where.setAttribute("src", e.target.result)
            } else {
                where.style.backgroundImage = "url(" + e.target.result + ")"
            }
        }
        reader.readAsDataURL(new_picture.files[0]);
    }
}
new_picture.onchange = function () {
    let setNewPhoto = document.querySelector(".profileInfo__avatar")
    changePhoto(this, setNewPhoto)
}
//admin info changing

//adminProfile
let admin_profile = document.querySelector(".admin__settingsList>li:first-child")
let profile_bg = document.querySelector(".adminProfile__bg")
let profile_block = document.querySelector(".adminProfile__block")
let cross = document.querySelector(".adminProfile__header--cross")
let showProfile = (add_remove) => {
    if (add_remove === "add") {
        profile_bg.classList.add("dNone")
        profile_block.classList.add("dNone")
    } else {
        profile_bg.classList.remove("dNone")
        profile_block.classList.remove("dNone")
    }
}
showProfile("add")
admin_profile.onclick = () => {
    showProfile("remove")
}
cross.onclick = () => {
    showProfile("add")
}

let save = document.querySelector(".profileInfo__save")
let labels = document.querySelectorAll(".profileInfo__label")
let login_warn = labels[0]
let name_warn = labels[1]
let mail_warn = labels[2]

login_warn.classList.add("dNone")
name_warn.classList.add("dNone")
mail_warn.classList.add("dNone")
let inputs = document.querySelectorAll(".profileInfo__input")
let login, name, mail
let valid = () => {
    login = inputs[0].value
    name = inputs[1].value
    mail = inputs[2].value
    let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let only_text = /^([^0-9]*)$/;
    if (login.length < 3 || login.length > 30) {
        console.log(login)
        labels[0].classList.remove("dNone")
    } else {
        console.log(login)
        labels[0].classList.add("dNone")
    }
    if (name.length < 8 || name.length > 20) {
        labels[1].classList.remove("dNone")
    } else if (only_text.test(name)) {
        labels[1].classList.add("dNone")
        document.querySelector(".profileInfo__name").innerHTML = name
    }
    if (!(re.test(mail.toString().toLowerCase()))) {
        labels[2].classList.remove("dNone")
    } else {
        labels[2].classList.add("dNone")
    }
    let i
    for (i = 0; i < 3; i++) {
        if (!(labels[i].classList.contains("dNone"))) {
            break
        }
    }
    if (i === 3) {
        showProfile("add")
        let setToAvatar = document.querySelector(".navProfile__avatar--img")
        let setToAvatar2 = document.querySelector(".admin__avatar")
        changePhoto(new_picture, setToAvatar)
        changePhoto(new_picture, setToAvatar2)
        document.querySelector(".admin__name").innerHTML = name
    }

}
save.addEventListener("click", valid)
//adminProfile


//pagination
let pageNumber = document.querySelector(".dataTablePagination__thisPage")
let tBodyRows = document.querySelectorAll(".tableBody tr")
let countToShow = tBodyRows.length
if (countToShow > 8) {
    for (let i = 8; i < countToShow; i++) {
        tBodyRows[i].classList.add("dontShow")
    }
}
let pointer = 1;
const movePrevPage = () => {
    pointer--
    if (pointer < 1) {
        pointer = 1
        return
    }
    pageNumber.innerHTML = pointer
    countToShow += 8
    if (countToShow <= tBodyRows.length) {
        for (let i = 0; i < (pointer - 1) * 8; i++) {
            tBodyRows[i].classList.add("dontShow")
        }
        for (let i = (pointer - 1) * 8; i < pointer * 8; i++) {
            // if (!(tBodyRows[i].classList.contains("dNone"))) {
            //     continue
            // }
            tBodyRows[i].classList.remove("dontShow")
        }
        for (let i = pointer * 8; i < tBodyRows.length; i++) {
            tBodyRows[i].classList.add("dontShow")
        }
    }
}

const moveNextPage = () => {
    pointer++
    if (pointer > Math.ceil(tBodyRows.length / 8)) {
        pointer = Math.ceil(tBodyRows.length / 8)
        return
    }
    pageNumber.innerHTML = pointer
    countToShow -= 8
    for (let i = 0; i < (pointer - 1) * 8 + 1; i++) {
        tBodyRows[i].classList.add("dontShow")
    }
    if (countToShow > 8) {
        for (let i = (pointer - 1) * 8; i < pointer * 8; i++) {
            if (!(tBodyRows[i].classList.contains("dNone"))) {

            }
            tBodyRows[i].classList.remove("dontShow")
        }
        for (let i = pointer * 8; i < countToShow; i++) {
            tBodyRows[i].classList.add("dontShow")
        }
    } else if (countToShow > 0) {
        for (let i = (pointer - 1) * 8; i < tBodyRows.length; i++) {
            tBodyRows[i].classList.remove("dontShow")
        }
    }
}

const prevPage = document.querySelector(".prevPage")
prevPage.addEventListener("click", movePrevPage)

const nextPage = document.querySelector(".nextPage")
nextPage.addEventListener("click", moveNextPage)
//pagination
