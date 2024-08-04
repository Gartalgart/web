let chrono = document.getElementById("chrono")
let miliseconde = 0
let second = 0
let minute = 0
let timeout
let stop = true


function startChrono(){
    if(stop){
        stop = false
        time()
    }
}

function timeStop(){
    if(!stop){
        stop = true
        clearTimeout(timeout)
    }
}

function time(){
    if(stop) return

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

    if(miliseconde < 10){
        miliseconde = "0" + miliseconde
    }
    if(second < 10){
        second = "0" + second
    }
    if(minute < 10){
        minute = "0" + minute
    }

    chrono.textContent = `${minute}:${second}:${miliseconde}`
    timeout = setTimeout(time, 10)
}
