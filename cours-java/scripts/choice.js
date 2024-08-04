function choiceWordSentence(){

    let idValid = document.getElementById("valid")
    let choiceRadioInput = document.querySelectorAll(".main .choice input")

    choiceRadioInput.forEach(input => {
        input.checked = false
    })
    idValid.addEventListener("click", () => {
        choiceRadioInput.forEach(input => {
            if(input.checked){ 
                 if(input.value === "word"){
                    choice = getRandomWord(wordComputer, 10)
                    console.log(choice)
                }else if(input.value === "sentence"){
                    choice = getRandomSentence(sentenceComputer, 10)
                    console.log(choice)
                }
            }
        }) 
        if(choice.length > 0){
            startGame()
        }else{
            console.log("No option selected")
        }
    })
}