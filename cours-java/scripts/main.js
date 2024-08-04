let score = 0
let choice = []

let listWord = document.getElementById("textElement")

function restart(){
    let restart = document.getElementById("restart")
    restart.addEventListener("click", () => {
        listWord.textContent = ""
        choiceWordSentence()
    })
}

listWord.textContent = ""
choiceWordSentence()
//startGame()

/*let idTaping = document.getElementById("text")
console.log(idTaping)

*/



/*

let listWord = document.querySelector("#word")
console.log(listWord)

let choiceRadioInput = document.querySelectorAll(".main .choice input")
for(let i = 0; i < choiceRadioInput.length; i++)
console.log(choiceRadioInput[i])*/

/*let newElement = document.createElement("div")
newElement.classList.add("newDiv")
console.log(newElement)

let idWord = document.getElementById("word")
idWord.appendChild(newElement)*/






    



