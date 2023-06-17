const listCategory = document.querySelector('#categories')
const itemEl = [...listCategory.children];
const itemNumbers = itemEl.length;
console.log(`Number of categories: ${itemNumbers}`)


itemEl.forEach(element => {
    const nameElement = element.children[0];
const listElem = element.lastElementChild;
const ulChild = listElem.children

    console.log(`Category: ${nameElement.textContent}`)
    console.log(`Elements: ${ulChild.length}`)
    
});