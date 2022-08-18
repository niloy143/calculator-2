const displayScreen = document.getElementById('display-screen');
const resultScreen = document.getElementById('result-screen');


// =========== Number Input Field ============
function keyValues(key) {
    displayScreen.innerText += key;
}

// =========== AC button ============
function ac() {
    displayScreen.innerText = '';
    resultScreen.innerText = '';
}

// =========== Delete Button ============
function del() {
    displayScreen.innerText = displayScreen.innerText.slice(0, displayScreen.innerText.length - 1);
}

// ========== Decimal (.) Button ===========
function decimalPoint(decimal) {
    if (!displayScreen.innerText.includes('.')) {
        if (displayScreen.innerText === '') {
            displayScreen.innerText = '0';
        }
        displayScreen.innerText += decimal;
    }
}

// =========== Zero (0) Button ==========
function zero(zeroInput) {
    if (displayScreen.innerText !== '') {
        displayScreen.innerText += zeroInput;
    }
}

// ========== Operation function for multiple use =========
function operationFunction() {
    const operandText = resultScreen.innerText;
    const operandNumber = parseFloat(operandText.slice(0, operandText.length - 1));
    const operator = parseFloat(displayScreen.innerText);
    let operationResult;
    switch (operandText[operandText.length - 1]) {
        case '+': operationResult = operandNumber + operator; break;
        case '−': operationResult = operandNumber - operator; break;
        case '×': operationResult = operandNumber * operator; break;
        case '÷': operationResult = operandNumber / operator; break;
        case '√': operationResult = operator ** (1/operandNumber); break;
        case '^': operationResult = operandNumber ** operator;
    }
    return operationResult;
}

// ========== Operation (+-*/%Xx) Buttons ==========
function operation(operand) {
    if (displayScreen.innerText !== '') {
        if (resultScreen.innerText === '') {
            resultScreen.innerText = displayScreen.innerText + operand;
        }
        else {
            resultScreen.innerText = operationFunction() + operand;
        }
        displayScreen.innerText = '';
    }
}

// =========== Result/Equal Button ============
function result() {
    if(displayScreen.innerText === '' || resultScreen.innerText === '') {
        return;
    }
    displayScreen.innerText = operationFunction();
    resultScreen.innerText = '';
}