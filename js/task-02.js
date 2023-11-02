const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector(`#ingredients`);
const foodIngredients = ingredients.forEach(ingredient => {
  const li = document.createElement(`li`);
  li.textContent = ingredient;
  li.classList.add(`item`);
  container.append(li);
});


