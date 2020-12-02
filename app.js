const form = document.getElementById('resume');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const date = document.getElementById('datepick');
const faculty = document.getElementById('faculty');
const file = document.getElementById('resumeFile');
const check = document.getElementById('check');
const submit = document.getElementById('submit');


function getGender() {
    return document.querySelector('input[name="gender"]:checked')
   }


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