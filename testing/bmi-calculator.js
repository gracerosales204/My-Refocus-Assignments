
function BMI(height, weight){
    let bmi = weight/Math.pow(height, 2);
    return bmi;
    }

function testBMI(){
    const result = BMI(1.79832,70);
    const expected = 21.64532402096181;

    console.assert(
        result === expected,
        `The result ${result} doesn't match the expected value ${expected}.`

    )
    
}

testBMI();
