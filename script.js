function convert() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const unit = document.getElementById('unit').value;
    let outputTemp;

    if (isNaN(inputTemp)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    switch (unit) {
        case 'CtoF':
            outputTemp = (inputTemp * 9/5) + 32;
            break;
        case 'FtoC':
            outputTemp = (inputTemp - 32) * 5/9;
            break;
        case 'CtoK':
            outputTemp = inputTemp + 273.15;
            break;
        case 'KtoC':
            outputTemp = inputTemp - 273.15;
            break;
        case 'FtoK':
            outputTemp = (inputTemp - 32) * 5/9 + 273.15;
            break;
        case 'KtoF':
            outputTemp = (inputTemp - 273.15) * 9/5 + 32;
            break;
        default:
            alert("Please select a valid conversion unit.");
            return;
    }
document.getElementById('outputTemp').value = outputTemp.toFixed(2);
}
