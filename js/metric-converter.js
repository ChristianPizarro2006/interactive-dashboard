// Imperial/Metric Converter

function convertMetric() {
    const value = parseFloat(document.getElementById("input-value").value);
    const conversionType = document.getElementById("conversion-type").value;
    const resultElement = document.getElementById("conversion-result");

    let result;

    if (isNaN(value)) {
        resultElement.innerHTML = "Please enter a valid number.";
        return;
    }

    if (conversionType === "inch to centimeter") {
        result = value * 2.54;

    } else if (conversionType === "foot to centimeter") {
        result = value * 30.48;

    } else if (conversionType === "yard to meter") {
        result = value * 0.91;

    } else if (conversionType === "mile to kilometer") {
        result = value * 1.61;

    } else if (conversionType === "centimeter to inch") {
        result = value * 0.39;

    } else if (conversionType === "centimeter to foot") {
        result = value * 0.0328;

    } else if (conversionType === "meter to yard") {
        result = value * 1.09;

    } else if (conversionType === "kilometer to mile") {
        result = value * 0.62;

    } else {
        resultElement.innerHTML = "Invalid conversion type.";
        return;
    }

    resultElement.innerHTML = "Converted Result: " + result.toFixed(2);
}

document.getElementById("convert-btn").addEventListener("click", convertMetric);