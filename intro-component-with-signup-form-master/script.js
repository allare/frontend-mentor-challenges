const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const pword = document.getElementById('pword');

form.addEventListener('submit', e => {
    e.preventDefault();

    if(fname.value === ''){
       error(fname);
    }
    else{
        removeError(fname);
    }

    if(lname.value === ''){
        error(lname);
    }
    else{
        removeError(lname);
    }

    if(email.value === ''){
        error(email);
    }
    else{
        removeError(email);
    }

    if(pword.value === ''){
        error(pword);
    }
    else{
        removeError(pword);
    }
   
});


function checkEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function error(field){
    const small = field.parentNode.querySelector('small');
    small.style.visibility = 'visible';
    const formControl = field.parentNode;
    formControl.classList.add('error');   
}

function removeError(field){
    const small = field.parentNode.querySelector('small');
    small.style.visibility = 'hidden';
    const formControl = field.parentNode;
    formControl.classList.remove('error');  
}
