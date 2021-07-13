const validationEl = document.querySelector('#validation-input');

validationEl.addEventListener('change', (event) => {
    if (Number(validationEl.getAttribute('data-length')) === event.target.value.length) {
        
        validationEl.classList.add("valid");
        validationEl.classList.remove("invalid");
    } else {
        validationEl.classList.remove("valid");
        validationEl.classList.add("invalid");
    }
});
