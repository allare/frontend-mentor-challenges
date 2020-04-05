const form = document.getElementById('form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const emailValue = form['email'].value;
   
    if(emailValue === ''){
        form.classList.add('error');
        errorMessage.innerText = "Email field cannot be empty.";
    }
    else if(!isValid(emailValue)){
        form.classList.add('error');
        errorMessage.innerText = "Please enter a valid email address.";
  
    }
    else{
        form.classList.remove('error');
        document.body.innerHTML = '<h1 style="text-align: center">Thank You for submission</h1>';
    }
});

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}