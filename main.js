const displayScreen = document.getElementById('display-screen');
const resultScreen = document.getElementById('result-screen');

function keyValues(key) {
    displayScreen.innerText += key;
}

function ac() {
    displayScreen.innerText = '';
    resultScreen.innerText = '';
}

function result() {
    resultScreen.innerText = displayScreen.innerText;
    displayScreen.innerText = '';
}

function del() {
    displayScreen.innerText = displayScreen.innerText.slice(0, displayScreen.innerText.length - 1);
}