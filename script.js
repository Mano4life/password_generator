let password = document.querySelector("#password");
let cbtn = document.querySelector("#cbutton");
let gbtn = document.querySelector(".gbutton");



gbtn.addEventListener("click",()=>{
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passlen = document.querySelector("#input").value;
    password = "";

    for (let i = 0; i <= passlen; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
       };

    document.getElementById("password").value = password;
    if(cbtn.classList.contains("fa-solid")){
        cbtn.classList.remove("fa-solid");
        cbtn.classList.add("fa-regular");
    }
    if(cbtn.classList.contains("rotate")){
        cbtn.classList.remove("rotate")
    }
});

cbtn.addEventListener("click", ()=>{
    cbtn.classList.add("rotate")
    cbtn.classList.remove("fa-regular");
    cbtn.classList.add("fa-solid")
    let copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
});