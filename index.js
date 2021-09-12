const CORRECT_PASSWORD = 'TrustNo1';

document.addEventListener('DOMContentLoaded', handleLoad);

function handleLoad(e) {
    const inputs = [...document.querySelectorAll('input')];

    disableInputs(inputs.slice(2));
    inputs[1].addEventListener('click', () => unlockInputs(inputs[0].value, inputs.slice(2)));
}

function disableInputs(inputs) {
    inputs.forEach(input => input.setAttribute('disabled', 'disabled'));
}

function unlockInputs(password, inputs) {
    if (password === CORRECT_PASSWORD) {
        for (let i = 0; i < inputs.length - 1; ++i) {
            inputs[i].removeAttribute('disabled')
        }
    }
}
