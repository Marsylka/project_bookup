document.querySelector('.contacts-form .submit-botton')
    .addEventListener('click', submitForm);

function login(e) {
    e.preventDefault();
    
}
function submitForm(e) {
    e.preventDefault();
    fetch('makeorder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.querySelector('.text-form input[name=userName]').value,
            email: document.querySelector('.text-form input[name=userMail]').value,
            password: document.querySelector('.text-form input[name=userParol]').value
        })
    })
        .then(_ => document.querySelector('.contacts-form').reset());
}
 