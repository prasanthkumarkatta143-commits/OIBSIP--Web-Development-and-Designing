const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", () => {
    const tempValue = temperatureInput.value.trim();
    const unit = unitSelect.value;

    // Validate input
    if (tempValue === "" || isNaN(tempValue)) {
        resultDiv.innerHTML = "Please enter a valid number.";
        resultDiv.style.color = "red";
        return;
    }

    const temp = parseFloat(tempValue);
    let resultText = "";

    if (unit === "celsius") {
        const fahrenheit = (temp * 9 / 5) + 32;
        const kelvin = temp + 273.15;

        resultText = `
            ${temp} °C = ${fahrenheit.toFixed(2)} °F <br>
            ${temp} °C = ${kelvin.toFixed(2)} K
        `;
    } 
    else if (unit === "fahrenheit") {
        const celsius = (temp - 32) * 5 / 9;
        const kelvin = celsius + 273.15;

        resultText = `
            ${temp} °F = ${celsius.toFixed(2)} °C <br>
            ${temp} °F = ${kelvin.toFixed(2)} K
        `;
    } 
    else if (unit === "kelvin") {
        const celsius = temp - 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;

        resultText = `
            ${temp} K = ${celsius.toFixed(2)} °C <br>
            ${temp} K = ${fahrenheit.toFixed(2)} °F
        `;
    }

    resultDiv.innerHTML = resultText;
    resultDiv.style.color = "#222";
});
