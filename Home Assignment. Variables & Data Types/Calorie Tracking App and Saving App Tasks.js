// Cycling for 30 minutes burns 225 calories
// Sam decides to do cycling for 30 minutes everyday in 15 days

// store in a variable named caloriesPerMinute the number of calories burned per minute.
let caloriesPerMinute = 7.5;

// count the number of times Sam will do cycling and store in a variable named numTimesSamDoescycling.
let numTimesSamDoescycling = 15;

// store in a variable named cyclingMinutesPerDay the number of minutes Sam has decided to do cycling.
let cyclingMinutesPerDay = 30;

//compute the total calories burned using caloriesPerHour and totalHoursRunning.
let totalCaloriesLost = caloriesPerMinute * cyclingMinutesPerDay * numTimesSamDoescycling;
// Display the message using console.org

console.log(`Great work, Sam! After ${cyclingMinutesPerDay} minutes of cycling every day for 15 days,you may lose a total of ${totalCaloriesLost} calories`);

//Sam wants to save P10 000 and store in a variable named GoalSavingsAmount
let GoalSavingsAmount = 10000;
//store in a variable named SavedMoney the current savings of Sam.
let SavedMoney = 7500;
//store in a variable named NeededMoney the amount of money needed to achieve goal amount.
let NeededMoney = GoalSavingsAmount - SavedMoney;
//compute the percentage of money needed for Sam to achieve his goal amount and store in a variable PercentageLeft. 
let PercentageLeft = (1 - (SavedMoney/GoalSavingsAmount)) * 100;

console.log(`Thank you for your discipline and hardwork, Sam! You are now ${PercentageLeft}% away from your goal of saving ₱10,000`);