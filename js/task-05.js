const inputNameEl = document.querySelector('#name-input')
inputNameEl.addEventListener('input', (event) => {
const outputEl = document.querySelector('#name-output')
outputEl.textContent = event.target.value
    if (inputNameEl.value === '') {
    outputEl.textContent = 'незнакомец'
} 
})