const username = "demo@gmail.com"
const password = "1234"

document.querySelector(".login-button").addEventListener("click", function(){
    if (document.querySelector(".username-input").value === username && document.querySelector(".password-input").value===password){
        window.location.href = "/bank.html"
    }
    else{
        alert("Username or Password is incorrect.")
    }
})
