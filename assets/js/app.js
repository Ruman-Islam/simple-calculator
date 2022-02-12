function assignNumberToValueField(keyValue) {
    let inputValue = document.getElementById('inp');
    inputValue.value += keyValue;
}

function calculator() {
    const inputValue = document.getElementById('inp');
    const total = eval(inputValue.value);
    inputValue.value = total;
}

function clearValue() {
    document.getElementById('inp').value = null;
}