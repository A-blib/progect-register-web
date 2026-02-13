const halamanRegister = document.getElementById("register")
const registerButton = document.getElementById("daftar")
const inputUsername = document.getElementById("inputUsername")
const inputPassword = document.getElementById("inputPassword")

function register(){
    localStorage.setItem("username",  inputUsername.value)
    localStorage.setItem("password", inputPassword.value)
    if(inputUsername.value == "" && inputPassword.value == ""){
        alert("isi username dan password terlebih dahulu")
    }else{
        window.location.href = "login.html"
    }
}

const loginUsername = document.getElementById("username")
const loginPassword = document.getElementById("password")
const role = document.getElementById("role")
const dataUsername = localStorage.getItem("username")
const dataPassword = localStorage.getItem("password")



function login(){
    if(loginUsername.value == dataUsername &&  loginPassword.value == dataPassword){
        if(role.value == "frontend"){
            window.location.href = "frontend.html"
        }else if(role.value == "backhand"){
            window.location.href = "backhand.html"
        }else if(role.value == "devops"){
            window.location.href = "devops.html"
        }else{
            alert("role tidak terdeteksi silahkan pilih terlebih dahulu")
        }
    }else{
        alert("input tidak valid ")
    }
}


console.log(dataUsername)
console.log(dataPassword)