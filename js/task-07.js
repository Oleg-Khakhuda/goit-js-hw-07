const inputRangeEl = document.querySelector('#font-size-control')
const inputTextEl = document.querySelector('#text')

const fontSizeControl = (event) => {
    inputTextEl.style.fontSize = event.target.value + "px";
};

inputRangeEl.addEventListener('input', fontSizeControl)