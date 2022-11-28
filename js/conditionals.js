"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// function analyzeColor(color){
//        let colorChoice = color.toLowerCase();
//     if (colorChoice == "blue"){
//         return "The sky is blue.";
//     } else if (colorChoice.toLowerCase() == "red"){
//         return "My shirt is red.";
//     } else if (colorChoice.toLowerCase() == "brown"){
//         return "My shoes are black.";
//     } else if (colorChoice.toLowerCase() == "green"){
//         return `The color of grass.`;
//     } else {
//         return `I'm colorblind, so I dont know ${colorChoice}.`;
// }
// let result = analyzeColor(colorChoice)
// console.log(result);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// let result2 = analyzeColor(randomColor);
//     console.log(result2);


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color){
    let userColor = color.toLowerCase();
    switch (userColor){
        case "red":
            return "My favorite shirt is red."
            break;
        case "blue":
            return "The sky is blue.";
            break;
        case "green":
            return "The grass is green.";
            break;
        default:
            return `I don't know ${userColor}.`;
            break;
    }
}
// let result3 = analyzeColor(randomColor);
// console.log(result3);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let colorPrompt = prompt("What is your favorite color?");
let userColorResult = analyzeColor(colorPrompt);
console.log(userColorResult);


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// let randomDiscount = Math.floor((Math.random() * 5) + 0);
// let randomTotal = Math.floor((Math.random() * 1000) + 1);
//
// function calculateTotal(){
//     if (luckyNumber == 0) {
//         console.log(`Before discount, your total is $${randomTotal}.`);
//         console.log(`Your discount is 0%.`);
//         console.log(`Your new total is $${randomTotal}.`);
//     }
//     else if (luckyNumber == 1) {
//         console.log(`Before discount, your total is $${randomTotal}.`);
//         console.log(`Your discount is 10%.`);
//         let discountPercentage = randomTotal * .1;
//         let discountTotal = randomTotal - discountPercentage;
//         console.log(`Your new total is $${discountTotal.toFixed(2)}.`);
//     }
//     else if (luckyNumber== 2) {
//         console.log(`Before discount, your total is $${randomTotal}.`);
//         console.log(`Your discount is 25%.`);
//         let discountPercentage = randomTotal * .25;
//         let discountTotal = randomTotal - discountPercentage;
//         console.log(`Your new total is $${discountTotal.toFixed(2)}.`);
//     }
//     else if (luckyNumber == 3) {
//         console.log(`Before discount, your total is ${randomTotal}.`);
//         console.log(`Your discount is 35%.`);
//         let discountPercentage = randomTotal * .35;
//         let discountTotal = randomTotal - discountPercentage;
//         console.log(`Your new total is ${discountTotal.toFixed(2)}.`);
//     }
//     else if (luckyNumber == 4) {
//         console.log(`Before discount, your total is $${randomTotal}.`);
//         console.log(`Your discount is 50%.`);
//         let discountPercentage = randomTotal * .5;
//         let discountTotal = randomTotal - discountPercentage;
//         console.log(`Your new total is $${discountTotal.toFixed(2)}.`);
//     }
//     else if (luckyNumber == 5) {
//         console.log(`Before discount, your total is $${randomTotal}.`);
//         console.log(`Your discount is 100%`);
//         console.log(`You get it all for free!`);
//     }
// }
// calculateTotal(randomDiscount,randomTotal);
function calculateTotal(luckyNum, total){
    let discount,
        discountedPrice;
    alert(`Lucky number is:${luckyNumber}.`)
    switch(luckyNum) {
        case 0:
            discount = 0;
            break;
        case 1:
            discount = .1;
            break;
        case 2:
            discount = .25;
            break;
        case 3:
            discount = .35;
            break;
        case 4:
            discount = .5;
            break;
        case 5:
            discount = 1;
            break;
        default:
            return "Not a lucky number.";
    }

    if (!isNaN(total)) {
        discountedPrice = total - (total * discount);
    } else {
        return "The total provided is not a number.";
    }
    return discountedPrice;
}
// let discount = calculateTotal(3,250);
// console.log(discount)


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
// calculateTotal(luckyNumber,randomTotal);
let userNumberPrompt = prompt("What was the total of your bill?");
let userResult2 = calculateTotal(luckyNumber,userNumberPrompt);
alert(`Your number was ${luckyNumber}.
The price before the discount was $${userNumberPrompt}.
The price after the discount is $${userResult2.toFixed(2)}.`);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */



let userConfirm = confirm(`Want to play a game?`);
let userNumber;
// function clarifiedNumber() {
//     if (userConfirm) {
//         userNumber = prompt("Give me a number.");
//         return userNumber;
//     } else {
//         alert(`Next time then.`)
//     }
// }
function isEven(num){
    if (userNumber % 2 === 0);
}
else {
    alert(`This number is odd.`);
}

function isPositive(num){
    if (userNumber > 0) {
        alert(`This number is positive.`);
}
    else {
    alert(`This number is negative.`)
    }
}

function add100(num){
    return parseInt(userNumber) + 100
}

// function evenOddSwitch(){
//     let userConfirm = confirm(`Want to play a game?`);
//     if (userConfirm) {
//         userNumber = prompt("Give me a number.");
//         let numberPlus = parseInt(userNumber) + 100;
//         alert(`Your number is ${userNumber}.`);
//         alert(`${userNumber} plus 100 is ${numberPlus}.`);
//         if (numberPlus > 0){
//             alert(`${userNumber} is positive.`);
//         } else if (userNumber < 0){
//             alert (`${userNumber} is negative.`);
//         }
//             alert
//     } else
//         alert(`Another time then.`);
// }
// evenOddSwitch();