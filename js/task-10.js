function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

const controlsEl = document.querySelector('#controls')
const number = controlsEl.children[0]
const btnCreate = controlsEl.children[1]
const btnDestroy = controlsEl.children[2]

const boxesEl = document.querySelector('#boxes')

const amount = btnCreate.addEventListener('click', () => {
  const value = Number(number.value);
  // console.log(value)
  createBoxes(value)
});

function createBoxes (amount){
  
  const arr = Array.from({length: amount}, (v, k) => k += 1);
  
  console.log(arr);
  
  for(const elem of arr){
    const divEl = document.createElement('div');
    divEl.classList.add('boxes_element');
  divEl.style.backgroundColor = getRandomHexColor()
  // divEl.style.width += '10px';
  // divEl.style.height += '10px';

  boxesEl.append(divEl);
  }

}

const destroy = btnDestroy.addEventListener('click', () => {
  boxesEl.innerHTML = '';
  number.value = '';
})

// const arr = Array.from({ length: 10 }, (v, k) => k += 1);
//   console.log(arr);


