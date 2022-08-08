const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const createList = () => {
  const liList = ingredients.map(text => {
    const li = document.createElement("li");

    li.textContent = text;

    li.classList.add("item");

    return li;
  });

  ingredientsEl.append(...liList);
  };

createList();