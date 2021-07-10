const quantityCategoriesEl = document.querySelector('ul#categories');
const itemEl = quantityCategoriesEl.children.length
console.log(`В списке ${itemEl} категории.`);


const listCategoriesEl = document.querySelector('#categories').children;
for (let elem of listCategoriesEl) {
    let titleEl = elem.firstElementChild.textContent;   
    let quantityEl = elem.lastElementChild.children.length;
    console.log(`Категория: ${titleEl}`);
    console.log(` Количество элементов: ${quantityEl}`);
};
