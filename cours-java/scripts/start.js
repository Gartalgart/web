function startGame (){
    let i = 0
    let listWord = document.getElementById("textElement")
    let valueTextArea = document.getElementById("text")

    listWord.textContent = choice[i]
    valueTextArea.focus()

    valueTextArea.addEventListener("keydown", (event) => {
        startChrono()
        if(event.key === "Enter"){
            console.log("Enter key pressed")
            event.preventDefault()
            if(valueTextArea.value.trim() === choice[i]){
            score++
            }else{
            console.log("You do a typo.")
            }

            i++
        
            if(i < choice.length){
                listWord.textContent = choice[i]
            }else{
                timeStop()
                console.log("Game Over ! Final score is " + score)
                valueTextArea.disabled = true
            }
            valueTextArea.value = ""
            console.log(messageScore(score, 10))
        }else{
            console.log("key pressed: ${event.key}")
        }
    }) 
}