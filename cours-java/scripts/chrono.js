let chrono = document.getElementById("chrono")
let miliseconde = 0
let second = 0
let minute = 0
let timeout
let stop = true

//Démarre le chrono
function startChrono(){
    if(stop){
        stop = false
        time()
    }
}
// Arrête le chrono
function timeStop(){
    if(!stop){
        stop = true
        clearTimeout(timeout)
    }
}

function time(){
    if(stop) return
    // Permet de convertir nos variable en entier
    miliseconde = parseInt(miliseconde)
    second = parseInt(second)
    minute = parseInt(minute)

    miliseconde++

    if(miliseconde === 100){
        second++
        miliseconde = 0
    }
    if(second === 60){
        minute++
        second = 0
    }
    // affichage, met un 0 devant la valeur de la variable lorsque ces dernières sont inférieures à 10
    if(miliseconde < 10){
        miliseconde = "0" + miliseconde
    }
    if(second < 10){
        second = "0" + second
    }
    if(minute < 10){
        minute = "0" + minute
    }
    //Remplace le texte de la balise chrono par mes varibles
    chrono.textContent = `${minute}:${second}:${miliseconde}`
    //Indique d'éxecuter la fonction time toute les 10 milisecondes
    timeout = setTimeout(time, 10)
}
