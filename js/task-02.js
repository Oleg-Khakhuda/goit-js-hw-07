const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ingredientsEl = document.querySelector('#ingredients');

const getIngredients = ingredients.map(function(element) {
const getElement = document.createElement('li');
    getElement.append(element)
   
   return ingredientsEl.append(getElement)    
});

console.log(ingredientsEl);
