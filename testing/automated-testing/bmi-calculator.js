

function BMI(height, weight){
    let bmi = weight/Math.pow(height, 2);
    return bmi;
    }
    let height = 1.79832;
        let weight = 90;
    let bmi = BMI(height, weight);
        console.log("Your BMI is " + bmi + ". It falls within ");
         
        // Conditions to find out BMI category
        if (bmi < 18.5)
            console.log("underweight range");
 
        else if (bmi >= 18.5 && bmi < 24.9)
            console.log("normal and healthy weight range");
 
        else if (bmi >= 24.9 && bmi < 30)
           console.log("overweight range");
 
        else if (bmi >= 30)
            console.log("obese range");
    

    // console.assert(
    //     result === expected,
    //     `The result ${result} doesn't match the expected value ${expected}.`

    // )
    
// testBMI();

module.exports = BMI


