// 4.1
function getTagsOfElements(elements){
    let arr = []

    for(let i = 0;i < elements.length;i++){
        arr.push(elements[i].tagName)
    }

    return arr
}

let task1 = document.getElementsByClassName('sample_class')

console.log(getTagsOfElements(task1))

// 4.2
function getClassesOfElement(element){
    let arr = []

    for(let i = 0;i < element.classList.length;i++){
        arr.push(element.classList.item(i))
    }

    return arr
}

let task2 = document.getElementById('sample_id')

console.log(getClassesOfElement(task2))

// 4.3
function getInnerTextsOfElements(elements){
    let arr = []

    for(let i = 0;i < elements.length;i++){
        arr.push(elements[i].innerText)
    }

    return arr
}

let task3 = document.getElementsByClassName('sample_class_2')

console.log(getInnerTextsOfElements(task3))

// 4.4
function getAddressesOfElements(elements){
    let arr = []

    for(let i = 0;i < elements.length;i++){
        arr.push(elements[i].getAttribute('href'))
    }

    return arr
}

let task4 = document.getElementsByTagName('a')

console.log(getAddressesOfElements(task4))

// 4.5
var task5 = document.querySelector('.sample_class_3').children

console.log(getTagsOfElements(task5))