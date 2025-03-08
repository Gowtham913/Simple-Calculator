function appendValue(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function clearLastCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert('Invalid Expression');
    }
}
function calculateSquareRoot() {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);
    if (!isNaN(value) && value >= 0) {
        display.value = Math.sqrt(value);
    } else {
        alert('Invalid Input for Square Root');
    }
}
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"]`);
    if (button) {
        button.classList.add('active');
        button.click();
        setTimeout(() => button.classList.remove('active'), 150);
    }
});
