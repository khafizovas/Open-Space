const CORRECT_PASSWORD = 'TrustNo1';

document.addEventListener('DOMContentLoaded', handleLoad);

function handleLoad(e) {
    const inputs = [...document.querySelectorAll('input')];

    disableInputs(e, inputs.slice(2));
    inputs[1].addEventListener('click', () => handleUnlock(e, inputs[0].value, inputs.slice(2)));
}

function disableInputs(e, inputs) {
    inputs.forEach(input => input.setAttribute('disabled', 'disabled'));
}

function handleUnlock(e, password, inputs) {
    if (password === CORRECT_PASSWORD) {
        inputs.forEach(input => input.removeAttribute('disabled'));
    }
}