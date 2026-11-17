let display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
        }, 1500);
    }
}

function calculatePercentage() {
    try {
        currentInput = (eval(currentInput) / 100).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
        }, 1500);
    }
}

let memoryValue = 0;

function memoryAdd() {
    const value = Number(currentInput);
    if (Number.isFinite(value)) {
        memoryValue += value;
        display.style.borderLeft = '5px solid #ff9800';
    }
}

function memorySubtract() {
    const value = Number(currentInput);
    if (Number.isFinite(value)) {
        memoryValue -= value;
        display.style.borderLeft = '5px solid #ff9800';
    }
}

function memoryRecall() {
    currentInput = String(memoryValue);
    updateDisplay();
}

function memoryClear() {
    memoryValue = 0;
    display.style.borderLeft = '';
}