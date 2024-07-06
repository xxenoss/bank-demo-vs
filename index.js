const username = "demo@gmail.com"
const password = "1234"

document.querySelector(".login-button").addEventListener("click", function(){
    if (document.querySelector(".username-input").value === username && document.querySelector(".password-input").value===password){
        document.querySelector(".login-area").style.display = "none";
        document.querySelector(".bank-area").style.display = "block";
    }
    else{
        alert("Username or Password is incorrect.")
    }
})



