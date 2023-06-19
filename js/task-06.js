
const inputEl = document.querySelector('#validation-input');

const minLength = Number(inputEl.dataset.length);

inputEl.addEventListener('input', (event) => {
    const inputValue = event.currentTarget.value;
 
    inputEl.addEventListener('blur', () => {
        if(inputValue.length !== minLength){
            inputEl.classList.remove('valid')
            inputEl.classList.add('invalid')
        }else{
            inputEl.classList.remove('invalid')
            inputEl.classList.add('valid')
        }
    })
})

