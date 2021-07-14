const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ingredientsEl = document.querySelector('#ingredients');

const getIngredients = ingredients.forEach((element) => {
    const getElement = document.createElement('li');
    getElement.textContent = element
    ingredientsEl.append(getElement)    
});

console.log(ingredientsEl);
