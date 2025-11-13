const inputEl = document.querySelector('.header__input');
const buttonEl = document.querySelector('.header__button');
const measurement = ["meters", "feet", "liters", "gallons", "kilos", "pounds"];
let i, j;
const unitStatic = [3.281, 0.305, 0.264, 3.789, 2.204, 0.454]
j = 0;
if(localStorage.getItem('lastInput')){
    for (i = 0; i < 3; i++) {
        let elementId = `description-output${i + 1}`;
        let outputEl = document.querySelector(`#${elementId}`);
        if (outputEl) {
            let inputNum = Number(localStorage.getItem('lastInput'));
            outputEl.innerHTML = `${inputNum} ${measurement[j]} = ${(inputNum * unitStatic[j]).toFixed(3)} ${measurement[j + 1]} | ${inputNum} ${measurement[j + 1]} = ${(inputNum * unitStatic[j + 1]).toFixed(3)} ${measurement[j]}`;
            j += 2;
        }
    }
    j = 0;
}

buttonEl.addEventListener('click', function () {
    localStorage.setItem('lastInput', inputEl.value);
    for (i = 0; i < 3; i++) {
        let elementId = `description-output${i + 1}`;
        let outputEl = document.querySelector(`#${elementId}`);
        if (outputEl) {
            let inputNum = Number(localStorage.getItem('lastInput'));
            outputEl.innerHTML = `${inputNum} ${measurement[j]} = ${(inputNum * unitStatic[j]).toFixed(3)} ${measurement[j + 1]} | ${inputNum} ${measurement[j + 1]} = ${(inputNum * unitStatic[j + 1]).toFixed(3)} ${measurement[j]}`;
            j += 2;
        }
    }
    j = 0;
})
