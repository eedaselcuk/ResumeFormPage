// Data Picker 
$('.datepicker').datepicker({
    ok: '',
    clear: 'Clear selection',
    close: 'Cancel'
    })
// Data Picker 
$('.datepicker').datepicker({
    ok: '',
    clear: 'Clear selection',
    close: 'Cancel'
    })

const sendIt = function(){
    
    document.getElementById('submit').addEventListener('click', send);
}

const send = function(e) {
    e.preventDefault();

    const validateForm = validate();

    if(validateForm) {
        document.getElementById('resume').onsubmit();
    }
    else {
        alert("Koşulları onayladığınızı belirtmelisiniz.");
    }
}

const validate = function(e) {
    const valid = true;

    const name = document.getElementById('name');

    if (name.value === "") {
        alert("Adınızı giriniz.");
    }
    const surname = document.getElementById('surname');

    if (surname.value === "") {
        alert("Soyadınızı giriniz.");
    }

    const email = document.getElementById('email');

    if (email.value === "") {
        alert("email adresinizi giriniz.");
    }

    const date = document.getElementById('datepick');
    const faculty = document.getElementById('faculty');
    const file = document.getElementById('resumeFile');

    if(file.value === "") {
        alert("Özgeçmiş dosyanızı yüklemelisiniz.");
    }

    const checkCon = document.getElementById('check');

    if(!checkCon.checked) {
        valid = false;
        alert("Koşulları onayladığınızı belirtmelisiniz.");
    }

    return valid;
}

document.addEventListener('DOMContentLoaded', sendIt);

// CHECKBOX controller 


/* 
const myform = document.getElementById('resume');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const date = document.getElementById('datepick');
const faculty = document.getElementById('faculty');
const file = document.getElementById('resumeFile');
const checkCon = document.getElementById('check');
const submit = document.getElementById('submit');

function getGender() {
    return document.querySelector('input[name="gender"]:checked');
}

function ResumeSubmit() {
    if (checkCon.checked == true) {
        ResumeSubmit.submit();
    }else {
        alert("Koşulları onayladığınızı belirtmelisiniz.");
    }
}



$(form).ready(function() {
    $("#submit").click(function()) {
        if( $("#check").is(":checked") )
        {
            $("#resume").submit();

        }else{
            alert("Koşulları kabul etmelisiniz.");
            return false;
        }
        return false;
    }
})

function submitForm(checkCon) {
    if ( checkCon.checked == 1) {
        document.form.onsubmit();
    }
    else {
        alert("Koşulları onayladığınızı belirtmelisiniz.");
    }
} */