const container = document.getElementById("container")
const registerBtn = document.getElementById("register")
const loginBtn = document.getElementById("login")

/*Quand je clique sur s'enregistrer dans la basile toggle, ma basile
 active est activer et je bascule sur ma balise form-signUp*/
registerBtn.addEventListener("click", () => {
    container.classList.add("active")
})

/*Quand je clique sur se connecter dans la basile toggle, ma basile
 active est désactiver et je bascule sur ma balise form-signIn*/
loginBtn.addEventListener("click", () => {
    container.classList.remove("active")
})