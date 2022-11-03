// searching word

// const searching = function (value) {
//     let table = document.querySelector(".tableBody")
//     let tableRow = document.querySelectorAll(".tableBody tr")
//     let tableRowArr = Array.from(tableRow);
//     let resultArray = tableRowArr.filter((rowItem,index) => {
//         console.log(tableRow.item(index).textContent.includes(value))
//         if(tableRow.item(index).textContent.includes(value)){
//             return tableRow
//         }
//     })
//     console.log("resultarray",resultArray)
//     const new_tbody = document.createElement('tbody');
//     new_tbody.classList.add("tableBody")
//     table.parentNode.replaceChild(new_tbody, table)
//     resultArray.forEach((item)=>{
//         new_tbody.prepend(item)
//     })
// }

const searchWithWord = function () {
    let typeValue = this.value;
    searching(typeValue)
}

const searchWithOptions = function () {
    let selectedItem = this.value
    let searchingItem
    if (this.classList.contains("inputBlock__selectCountry")) {
        const countries = {
            "Россия": "RU",
            "Белоруссия": "BY",
            "Армения":"AM",
            "США": "US",
        }

        searchingItem = countries[selectedItem]
    } else {
        searchingItem = selectedItem
    }
    searchInput.value = searchingItem
    searching(searchingItem)
}

const searching = function (value) {
    let tableData = document.querySelectorAll(".tableBody tr td")
    let tableRow = document.querySelectorAll(".tableBody tr")
    tableRow.forEach((rowItem) => {
        tableData.forEach((dataItem) => {
            let closestItem = dataItem.closest("td").closest("tr")
            let searchingPos = dataItem.innerText.search(value)
            if (value !== "") {
                if (searchingPos !== -1 && value !== ".") {

                    closestItem = dataItem.closest("td").closest("tr")
                    closestItem.classList.remove("dNone")
                } else {
                    rowItem.classList.add("dNone")
                }
            } else {
                rowItem.classList.remove("dNone")
            }
        })
    })
}

const searchOption = document.querySelectorAll(".select")
searchOption.forEach((selectItem) => {
    selectItem.addEventListener("change", searchWithOptions)
})

const searchInput = document.querySelector(".searchInp")
searchInput.addEventListener("input", searchWithWord)
//searching word

//Sorting
const toSort = function (child) {
    let column = child - 1
    let tableRowFull = document.querySelectorAll(".tableBody tr")
    let tableSortImg = document.querySelectorAll(".table__sort")
    tableSortImg.forEach((item)=>{
        item.setAttribute("src", "../static/images/general/sort.svg")
    })
    let i = 0, j = 0
    for ( i ; i < tableRowFull.length; i++){
        if (tableRowFull[i].classList.contains("dNone") ) continue;
        for ( j = i + 1; j < tableRowFull.length; j++) {
            if (tableRowFull[j].classList.contains("dNone")) continue;
            let firstLoopData = tableRowFull[i].getElementsByTagName("td")
            let secondLoopData = tableRowFull[j].getElementsByTagName("td")
            let firstItem = firstLoopData[column].innerText
            let secondItem = secondLoopData[column].innerText
            if (column === 0){
                firstItem = parseInt(firstItem)
                secondItem = parseInt(secondItem)
            }
            if (clickCountArray[column] === 1) {
                tableSortImg[column].setAttribute("src", "../static/images/general/sortUp.svg")
                tableSortImg[column].classList.remove("rotate")
                if (firstItem > secondItem) {
                    let k = tableRowFull[i].innerHTML
                    tableRowFull[i].innerHTML = tableRowFull[j].innerHTML
                    tableRowFull[j].innerHTML = k
                }
            } else if (firstItem < secondItem) {
                let k = tableRowFull[i].innerHTML
                tableRowFull[i].innerHTML = tableRowFull[j].innerHTML
                tableRowFull[j].innerHTML = k
                tableSortImg[column].setAttribute("src", "../static/images/general/sortUp.svg")
                tableSortImg[column].classList.add("rotate")
            }
            else{
                tableSortImg[column].setAttribute("src", "../static/images/general/sortUp.svg")
                tableSortImg[column].classList.add("rotate")
            }
        }
    }
}
const headers = [
    "№","Проекты","Заголовки","Офферы","Гео", "Дата"
]
const sortingColumns = function () {
    const num = headers.indexOf(this.innerText)
    clickCountArray[num] *= -1;
    toSort(num+1)
}

let clickCountArray = Array.from({length: 6}).fill(-1)
const tableHeaders = document.querySelectorAll("th")
tableHeaders.forEach((headerItem) => {
    headerItem.addEventListener("click", sortingColumns)
})
//Sorting

//download
let downloadButtons = document.querySelectorAll(".tableBody__item--link")
downloadButtons.forEach((download_item)=>{
    download_item.addEventListener("click",function (){
        let val = "";
        let thisRow = download_item.closest("tr")
        val += thisRow.outerText
        download_item.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(val));
        download_item.setAttribute('download', "download.txt");
    })
})
//download

//delete
let deleteButtons = document.querySelectorAll(".tableBody__item--delete")
deleteButtons.forEach((delete_item)=>{
    delete_item.addEventListener("click",function (){
        this.closest("tr").classList.add("dNone")
        console.log("click delete")
    })
})
//delete

//status
let tBodyRows = document.querySelectorAll(".tableBody tr")
let countToShow = tBodyRows.length
let statusButtons = document.querySelectorAll(".tableBody__item--status")
let statusArray = Array.from({length: countToShow}).fill(false)
statusButtons.forEach((status_item,index)=>{
    status_item.addEventListener("click",function (){
        console.log("click")
        if (statusArray[index])
        {
            this.style.backgroundColor = "#2F3CED"
            statusArray[index] = false
        }
        else{
            this.style.backgroundColor = "#29c429"
            statusArray[index] = true
        }
    })
})
//status