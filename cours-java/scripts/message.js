function messageScore(score, nombreQuestion){
    let newScore = document.getElementById("scoreDisplay")

    let message = "Ton score est de "+ score +" / "+ nombreQuestion

    //Je remplace le contenue dans la balise scoreDisplay par la valeur de ma variable message
    newScore.textContent = message
    return message
    
}