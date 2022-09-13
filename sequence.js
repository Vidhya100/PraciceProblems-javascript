//1. Random function to get single digit
let ran = Math.floor(Math.random() * 10);
console.log("Single Digit Random Number: " + ran + "\n");

//2.Number between 1 to 6
let ran1 = Math.floor(Math.random() * 6 + 1);
console.log("Dice Number: " + ran1 + "\n");

//3. Sum of two random numbers
let ran2 = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
console.log("Sum of two dice numbers: " + ran2 + "\n");

//4. 5 random 2-digit numbers and their sum and average
let sum = 0;
for (let i = 0; i < 5; i++) {
	let ran3 = Math.floor(Math.random() * 90 + 10);
	console.log("number " + " is: " + ran3);
	sum += ran3;
}
console.log("Sum of five random 2-digit numbers is: " + sum);
console.log("Avg of five random 2-digit numbers is: " + (sum / 5) + "\n");

//5. Unit conversions
let feet = 1 / 12;
console.log("42 inches are : " + feet * 42 + " feets\n");

let area_of_recanglar_plot = (60 * 12 * 2.54 / 100) * (40 * 12 * 2.54 / 100);
console.log("Area of 60feet X 40feet in meters is: " + area_of_recanglar_plot);

console.log("Area of 25 such plots: " + 25 * area_of_recanglar_plot);