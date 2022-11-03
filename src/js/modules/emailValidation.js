let emailInput = document.querySelector('.mainSubscribtion__mailInput')
let form = document.querySelector('.mainSubscribtion__form')
export function emailValidation() {

    let email = document.querySelector('.mainSubscribtion__mailInput').value
    let text = document.querySelector('.mainSubscribtion__mailValidMsg')
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (email.match(pattern)) {
        form.classList.add('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
    } else {
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = "Please Enter Valid Email Address"
        text.style.color = '#ff0000'
    }

    if (email === '') {
        form.classList.remove('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
        text.style.color = '#00ff00'
    }
}
emailInput.addEventListener('input',() => emailValidation());
