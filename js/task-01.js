const quantityCategoriesEl = document.querySelector('#categories');
const itemEl = quantityCategoriesEl.children.length
console.log(`В списке ${itemEl} категории.`);


const categoriesEl = document.querySelectorAll('.item');
for (let elem of categoriesEl) {
    let titleEl = elem.firstElementChild.textContent;   
    let quantityEl = elem.lastElementChild.children.length;
    console.log(`Категория: ${titleEl}`);
    console.log(`Количество элементов: ${quantityEl}`);
};