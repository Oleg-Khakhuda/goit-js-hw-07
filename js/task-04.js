let counterValue = 0;

const targetBtnEl = document.querySelector('#counter');
const addListenerBtnEl = document.querySelector('[data-action="increment"]');
const valueListenerEl = document.querySelector('#value')
const removeListenerBtnEl = document.querySelector('[data-action="decrement"]');


addListenerBtnEl.addEventListener('click', () => {
  valueListenerEl.textContent = counterValue += 1
});

removeListenerBtnEl.addEventListener('click', () => {
  valueListenerEl.textContent = counterValue -= 1
});

