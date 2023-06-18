
const counterEl = document.querySelector('#counter')

const elemInCounterArr = counterEl.children;
const value = elemInCounterArr[1];
let counterValue = 0;

elemInCounterArr[0].addEventListener('click', () => {
    value.textContent = (counterValue -= 1);

})

elemInCounterArr[2].addEventListener('click', () => {
    value.textContent = (counterValue += 1);

})