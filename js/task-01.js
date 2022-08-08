const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

const categoriesListEl = document.querySelectorAll('.item');

categoriesListEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});




