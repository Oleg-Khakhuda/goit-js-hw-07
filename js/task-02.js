const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ingredientsEl = document.querySelector('#ingredients');

// const addListItems = (arr) => {
//     const getIngredients = arr.map((element) => {
//         const getElement = document.createElement('li');
//         getElement.textContent = element
//         return getElement
//     });
//     ingredientsEl.append(...getIngredients);
// }

// addListItems(ingredients);

const createRef = ingredients.map(ingredient => {
    const getElement = document.createElement('li');
    getElement.textContent = ingredient;
    return getElement;
});
ingredientsEl.append(...createRef);

