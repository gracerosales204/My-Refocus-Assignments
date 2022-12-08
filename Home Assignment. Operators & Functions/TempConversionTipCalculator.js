

function celsiusConvertToKelvin(tempCelsius){
    let tempKelvin = (tempCelsius + 273);
    return tempKelvin;
}

console.log(celsiusConvertToKelvin(28.89))
console.log(celsiusConvertToKelvin(35))

function fahrenheitConvertToKelvin(tempFahrenheit){
    let tempKelvin = ((tempFahrenheit - 32) * (5/9) + 273.15);
    return tempKelvin;
}

console.log(fahrenheitConvertToKelvin(84))
console.log(fahrenheitConvertToKelvin(95))

//The tip should be 10% of a meal cost. Write a code that shows the total tip to be paid based on the food price.

function computeTip(totalBill){
    let tipAmount = (totalBill-(.90 * totalBill));
    return tipAmount;
}

console.log(computeTip(2000))
console.log(computeTip(1500))