// This display input tag
let displayInput = document.getElementById('inp');

// Assigning key value to display
function assignNumberToValueField(keyValue) {
    displayInput.value += keyValue;
}

// Delete display value from from last digit
function deleteValue() {
    displayInput.value = displayInput.value.slice(0, -1);
}

// Calculation part with the help of built in eval() method
function calculator() {
    const total = eval(displayInput.value);
    displayInput.value = total;
}

// Clear display values
function clearValue() {
    displayInput.value = null;
}

