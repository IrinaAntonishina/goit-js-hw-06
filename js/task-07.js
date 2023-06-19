
const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

inputRange.addEventListener('input', (event) => {
   const valueInput = Number(event.currentTarget.value); 

text.style.fontSize = `${valueInput}px`;
})