const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
console.log(ingredients)

const ingredientsList = document.querySelector('#ingredients')

const elIngredients = ingredients.map(el => {
  const listElement = document.createElement('li');
  listElement.textContent = el;
  return listElement;
})

console.log(elIngredients)

ingredientsList.append(...elIngredients)