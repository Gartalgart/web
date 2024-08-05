function choiceWordSentence(){

    let idValid = document.getElementById("valid")
    let choiceRadioInput = document.querySelectorAll(".main .choice input")

    //Sélectionne tous les inputs compris dans la variable choiceRadioInput
    choiceRadioInput.forEach(input => {
        input.checked = false
    })
    /* A chaque clique sur le bouton valider, la varible wordComputer ou
     sentenceComputer est sélectionner en fonction de si l'option mot ou 
     phrase est coché*/
    idValid.addEventListener("click", () => {
        choiceRadioInput.forEach(input => {
            if(input.checked){ 
                 if(input.value === "word"){
                    //Renvoie à la fonction qui sélectionne 10 mots au hasard
                    choice = getRandomWord(wordComputer, 10)
                    console.log(choice)
                }else if(input.value === "sentence"){
                    choice = getRandomSentence(sentenceComputer, 10)
                    console.log(choice)
                }
            }
        }) 
        /*Vérification de si une liste de mots à bien était sélectionné alors 
        je renvoie ma fonction démarrer */
        if(choice.length > 0){
            startGame()
        }else{
            console.log("No option selected")
        }
    })
}