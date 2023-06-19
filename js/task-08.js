
const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onFormSubmit);

const userData = {};

function onFormSubmit(event){
    event.preventDefault();
    const {elements:{email,password}} = event.currentTarget;

    if(email.value === '' || password.value === ''){
        alert('Всі поля повинні бути заповненні!')
    }
   userData.email = email.value;
   userData.password = password.value;

   console.log(userData);
   event.currentTarget.reset();
}

