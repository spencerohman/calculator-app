const display = document.getElementById('display');
let currentInput = '0';
let memoryValue = 0;

function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === 'Error') {
        currentInput = '0';
    }

    if (currentInput === '0' && value !== '.' && value !== '**') {
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

function showError() {
    currentInput = 'Error';
    updateDisplay();

    setTimeout(() => {
        if (currentInput === 'Error') {
            currentInput = '0';
            updateDisplay();
        }
    }, 1500);
}

function calculate() {
    try {
        currentInput = String(eval(currentInput));
        updateDisplay();
    } catch (error) {
        showError();
    }
}

function calculatePercentage() {
    try {
        currentInput = String(eval(currentInput) / 100);
        updateDisplay();
    } catch (error) {
        showError();
    }
}

function applySelectedFunction() {
    const operation = document.getElementById('scientificFunction').value;

    try {
        const value = Number(eval(currentInput));
        let result;

        switch (operation) {
            case 'sin':
                result = Math.sin(value * Math.PI / 180);
                break;
            case 'cos':
                result = Math.cos(value * Math.PI / 180);
                break;
            case 'tan':
                result = Math.tan(value * Math.PI / 180);
                break;
            case 'sqrt':
                result = Math.sqrt(value);
                break;
            case 'square':
                result = value ** 2;
                break;
            case 'log':
                result = Math.log10(value);
                break;
        }

        if (!Number.isFinite(result)) {
            throw new Error('Invalid result');
        }

        currentInput = String(Number(result.toPrecision(10)));
        updateDisplay();
    } catch (error) {
        showError();
    }
}

function memoryAdd() {
    try {
        memoryValue += Number(eval(currentInput));
        display.style.borderLeft = '5px solid #ff9800';
    } catch (error) {
        showError();
    }
}

function memorySubtract() {
    try {
        memoryValue -= Number(eval(currentInput));
        display.style.borderLeft = '5px solid #ff9800';
    } catch (error) {
        showError();
    }
}

function memoryRecall() {
    currentInput = String(memoryValue);
    updateDisplay();
}

function memoryClear() {
    memoryValue = 0;
    display.style.borderLeft = '';
}ㄋ