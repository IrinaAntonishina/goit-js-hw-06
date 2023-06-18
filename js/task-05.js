
const inputEl = document.querySelector('#name-input');

const nameUser = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    nameUser.textContent = event.currentTarget.value
    if(event.currentTarget.value === ''){
        nameUser.textContent = 'Anonymous'
    }
})