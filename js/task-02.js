const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// /* <li class="item">
//    <h2></h2>
//    </li> */

const listEl = document.querySelector('#ingredients');

const ingredient = ingredients.map(element => {
  const link = document.createElement('li');
  link.textContent = `${element}`;
  link.classList.add('item');
  return link
})

listEl.append(...ingredient);