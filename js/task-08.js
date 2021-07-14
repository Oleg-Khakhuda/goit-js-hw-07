const controlsEl = document.querySelector('#controls');
const inputEl = document.querySelector('[type="number"]');
const btnRenderEl = document.querySelector('[data-action="render"]');
const btnDestroyEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes')

function createBoxes(amount) {
    boxesEl.innerHTML = '';
    const basicSize = 30;
    amount = inputEl.value;
    for (var i = 0; i < amount; i += 1) {
        const size = basicSize + i * 10;
        const createBoxesDiv = document.createElement('div')
        createBoxesDiv.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        boxesEl.append(createBoxesDiv);
    }
    console.log(boxesEl);
    }

function random() {
  return Math.floor(Math.random() * 256);
}

const clearBoxes = () => {
    boxesEl.innerHTML = '';
}

btnRenderEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', clearBoxes);