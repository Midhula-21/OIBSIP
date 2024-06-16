document.getElementById('celsiusInput').addEventListener('input', function() {
    let celsius = parseFloat(this.value);
    if (!isNaN(celsius)) {
        document.getElementById('fahrenheitInput').value = (celsius * 9/5 + 32).toFixed(2);
        document.getElementById('kelvinInput').value = (celsius + 273.15).toFixed(2);
    } else {
        clearInputs();
    }
});

document.getElementById('fahrenheitInput').addEventListener('input', function() {
    let fahrenheit = parseFloat(this.value);
    if (!isNaN(fahrenheit)) {
        document.getElementById('celsiusInput').value = ((fahrenheit - 32) * 5/9).toFixed(2);
        document.getElementById('kelvinInput').value = ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
    } else {
        clearInputs();
    }
});

document.getElementById('kelvinInput').addEventListener('input', function() {
    let kelvin = parseFloat(this.value);
    if (!isNaN(kelvin)) {
        document.getElementById('celsiusInput').value = (kelvin - 273.15).toFixed(2);
        document.getElementById('fahrenheitInput').value = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
    } else {
        clearInputs();
    }
});

function clearInputs() {
    document.getElementById('celsiusInput').value = '';
    document.getElementById('fahrenheitInput').value = '';
    document.getElementById('kelvinInput').value = '';
}
