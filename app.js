let firstDiv = document.getElementById("firstDiv");
let secondDiv = document.getElementById("secondDiv");
let section = document.getElementById("section");
let button = document.getElementById("button");
let input = document.getElementById("input");
let dellAll = document.getElementById("dellAll")

button.addEventListener("click",function () {
    let divLine = document.createElement("div");
    let text = document.createElement("p")
    let dell = document.createElement("button")
    let check = document.createElement("input")
    secondDiv.appendChild(divLine)
    divLine.appendChild(check)
    divLine.appendChild(text)
    divLine.appendChild(dell)
    check.type = "checkbox" 
    dell.innerText = "Dellete"
    text.innerText =  input.value
    text.className = "text"
    check.className = "check"
    dell.className = "dell"
    divLine.className = "divLine"
    if (input.value === "") {
        divLine.remove()
    }
    input.value = ""
    dell.addEventListener ("click", function () {
        divLine.remove()
    })
    check.addEventListener ("click", function () {
        if (check.checked === true) {
            text.style.textDecoration = "line-through"
            divLine.style.borderColor = "red"
        }else {
            divLine.style.borderColor = "#9c9a9a"
            text.style.textDecoration = "none"
        }
    })
    dellAll.addEventListener("click", function () {
        secondDiv.innerHTML = ""
    })
})
