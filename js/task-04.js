let counterValue = 0;

const targetBtn = document.querySelector('#counter');
const addListenerBtn = document.querySelector('[data-action="increment"]');
const valueListener = document.querySelector('#value')
const removeListenerBtn = document.querySelector('[data-action="decrement"]');


addListenerBtn.addEventListener('click', () => {
  valueListener.textContent = counterValue += 1
  
});

removeListenerBtn.addEventListener('click', () => {
  valueListener.textContent = counterValue -= 1
});
