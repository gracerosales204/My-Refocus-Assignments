

const BMI = require("./bmi-calculator");

test("Checks if BMI is equal to 21.64532402096181", () => {
    expect (BMI(1.79832,70)).toBe(21.64532402096181);
});

test('Checks if BMI[1.79832, 70kg]is equal to 27.829702312665184',() => {
    expect(BMI(1.79832, 90)).toBe(27.829702312665184)
});

