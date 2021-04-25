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

const elIngredients = ingredients.map(el => el)

console.log(elIngredients)

ingredientsList.append(...elIngredients)