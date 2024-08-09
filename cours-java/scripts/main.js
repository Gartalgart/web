let score = 0
let choice = []

let listWord = document.getElementById("textElement")

/*Fonction qui permet de rénitialiser le jeu quand l'utilisateur clique sur le bouton rejouer*/
function restart(){
    let restart = document.getElementById("restart")
    restart.addEventListener("click", () => {
        console.log("click")
        listWord.textContent = ""
        chrono.textContent = "00:00:00"
        messageScore(0, 0)
        choiceWordSentence()
    })
}

listWord.textContent = ""// Nettoie la zone d'affichage
choiceWordSentence()
restart()









    



