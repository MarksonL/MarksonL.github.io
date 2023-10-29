let currentInput = ''; // Variable to store the current input
let isResult = false; // Flag to check if the display is showing a result

function appendToDisplay(value) {
    // Check if a result is being displayed
    if (isResult) {
        clearDisplay();
    }

    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    isResult = false;
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        document.getElementById('display').value = currentInput;
        isResult = true;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        isResult = true;
    }
}
