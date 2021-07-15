const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ingredientsEl = document.querySelector('#ingredients');

const addListItems = (arr) => {
    const getIngredients = arr.map((element) => {
        const getElement = document.createElement('li');
        getElement.textContent = element
        return getElement
    });
    ingredientsEl.append(...getIngredients);
}

addListItems(ingredients);
