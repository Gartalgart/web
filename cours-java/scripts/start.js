function startGame (){
    let i = 0
    let listWord = document.getElementById("textElement")
    let valueTextArea = document.getElementById("text")

    //J'initie mon premier mot de ma liste sélectionner dans la zone d'affichage
    listWord.textContent = choice[i]
    //Je point le curseur directement dans la zone de texte
    valueTextArea.focus()

    valueTextArea.addEventListener("keydown", (event) => {
        //Je lance ma fonction chrono dès que une des touches du clavier est tapé
        startChrono()
        if(event.key === "Enter"){//Utiliser "Enter" la majuscule est importante
            console.log("Enter key pressed")
            event.preventDefault()//Méthode qui ici va empêcher le retour à la ligne de la touche entrer
            /*Je vérifie si le mot taper dans la zone de texte est équivalent au mot
             correspondant de ma liste de mot affiche dans la zone d'affichage */
            if(valueTextArea.value.trim() === choice[i]){
            score++
            }else{
            console.log("You do a typo.")
            }

            i++ //Passe au mot suivant 
            /*Vérifie si la liste de mot n'est pas terminé sinon affiche message de fin de jeu*/ 
            if(i < choice.length){
                listWord.textContent = choice[i]
            }else{
                timeStop()
                console.log("Game Over ! Final score is " + score)
                valueTextArea.disabled = true // Désactive la zone de texte
            }
            valueTextArea.value = ""
            console.log(messageScore(score, 10))
        }else{
            //Retour dans la console touche appuyer autre que entrer
            console.log(`key pressed: ${event.key}`)
        }
    }) 
}