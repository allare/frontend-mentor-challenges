const form = document.getElementById("form");
const btn = document.getElementById("btn");
const formEmail = document.getElementById("email");
const iconError = document.getElementById("icon-error");
const textError = document.getElementById("text-error");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = formEmail.value; 
    

    if(emailValue == ""){
        form.classList.add("error");
        form.classList.remove("success");
    }
    else if(!validCheck(emailValue)){
        form.classList.add("error");
        form.classList.remove("success");
    }
    else{
        form.classList.remove("error");
        form.classList.add("success");
    }

    function validCheck(email){
        const emailCheck = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return emailCheck.test(email);
    }
});