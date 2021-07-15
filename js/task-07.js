const inputRangeEl = document.querySelector('#font-size-control');
const inputTextEl = document.querySelector('#text');

inputTextEl.style.fontSize = ('50px');

function fontSizeControl(event) {
    inputTextEl.style.fontSize = event.currentTarget.value + "px"
};

inputRangeEl.addEventListener('input', fontSizeControl);