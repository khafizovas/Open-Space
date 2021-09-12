const CORRECT_PASSWORD = 'TrustNo1';

document.addEventListener('DOMContentLoaded', handleLoad);

function handleLoad(e) {
    const inputs = [...document.querySelectorAll('input')];
    const launchInputs = inputs.slice(2);

    disableInputs(launchInputs);
    inputs[1].addEventListener('click', () => unlockInputs(inputs[0].value, launchInputs));

    for (let i = 0; i < launchInputs.length - 1; ++i) {
        launchInputs[i].addEventListener('change', () => handleInputChange(launchInputs));
    }
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

function handleInputChange(inputs) {
    for (let i = 0; i < inputs.length - 1; ++i) {
        if (!(inputs[i].checked || (inputs[i].value === '100'))) {
            inputs[inputs.length - 1].setAttribute('disabled', 'disabled');
            return;
        }
    }

    inputs[inputs.length - 1].removeAttribute('disabled');
}

