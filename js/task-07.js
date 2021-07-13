const inputRangeEl = document.querySelector('#font-size-control')
const inputTextEl = document.querySelector('#text')

const synchronicityInput = () => {
    inputTextEl.style.fontSize = `${inputRangeEl.value}px`
    console.log(synchronicityInput);
};

inputRangeEl.addEventListener('input', synchronicityInput)