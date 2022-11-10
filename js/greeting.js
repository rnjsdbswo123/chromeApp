const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

const link =document.querySelector("a")

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)

}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event)
}




const saveUsername = localStorage.getItem(USERNAME_KEY)

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit)
}else{
    paintGreetings()
    
}