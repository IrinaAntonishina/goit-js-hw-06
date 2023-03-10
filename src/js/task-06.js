

const inputEl = document.getElementById('validation-input');
const maxLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onInputBlur);


function onInputBlur (event) {
    
    if (event.currentTarget.value.length === maxLength){
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else{
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}
