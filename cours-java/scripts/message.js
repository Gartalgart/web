function messageScore(score, nombreQuestion){
    let newScore = document.getElementById("scoreDisplay")

    let message = "Ton score est de "+ score +" / "+ nombreQuestion

    newScore.textContent = message
    return message
    
}