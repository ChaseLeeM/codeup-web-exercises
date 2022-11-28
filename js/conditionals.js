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
// let colorChoice = prompt("What is your favorite color?");
//
// function analyzeColor(colorChoice){
//     if (colorChoice.toLowerCase() == "blue"){
//         console.log("The sky is blue.");
//     } else if (colorChoice.toLowerCase() == "red"){
//         console.log("My shirt is red.");
//     } else if (colorChoice.toLowerCase() == "brown"){
//         console.log("My shoes are black.");
//     } else if (colorChoice.toLowerCase() == "green"){
//         console.log(`The color of grass.`);
//     } else {
//         console.log(`I'm colorblind, so I dont know ${colorChoice}.`);
// }
//analyzeColor(colorChoice)

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
// function analyzeColor(randomColor){
//     if (randomColor.toLowerCase() == "blue"){
//         console.log("The sky is blue.");
//     } else if (randomColor.toLowerCase() == "red"){
//         console.log("My shirt is red.");
//     } else if (randomColor.toLowerCase() == "brown"){
//         console.log("My shoes are brown.");
//     } else if (randomColor.toLowerCase() == "green"){
//         console.log(`The color of grass.`);
//     } else {
//         console.log(`I'm colorblind, so I dont know ${randomColor}.`);
//     }
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(colorPrompt) {
    switch (colorPrompt.toLowerCase()) {
        case "red":
            console.log("My favorite shirt is red.");
            break;
        case "blue":
            console.log("The sky is blue.");
            break;
        case "green":
            console.log("The grass is green.");
            break;
        default:
            console.log(`I don't know ${colorPrompt}.`);
            break;
    }
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let colorPrompt = prompt("What is your favorite color?")
analyzeColor(colorPrompt)

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
let randomDiscount = Math.floor((Math.random() * 5) + 0);
let randomTotal = Math.floor((Math.random() * 1000) + 1);

function calculateTotal(){
    if (luckyNumber == 0) {
        console.log(`Before discount, your total is $${randomTotal}.`);
        console.log(`Your discount is 0%.`);
        console.log(`Your new total is $${randomTotal}.`);
    }
    else if (luckyNumber == 1) {
        console.log(`Before discount, your total is $${randomTotal}.`);
        console.log(`Your discount is 10%.`);
        let discountPercentage = randomTotal * .1;
        let discountTotal = randomTotal - discountPercentage;
        console.log(`Your new total is $${discountTotal.toFixed(2)}.`);
    }
    else if (luckyNumber== 2) {
        console.log(`Before discount, your total is $${randomTotal}.`);
        console.log(`Your discount is 25%.`);
        let discountPercentage = randomTotal * .25;
        let discountTotal = randomTotal - discountPercentage;
        console.log(`Your new total is $${discountTotal.toFixed(2)}.`);
    }
    else if (luckyNumber == 3) {
        console.log(`Before discount, your total is ${randomTotal}.`);
        console.log(`Your discount is 35%.`);
        let discountPercentage = randomTotal * .35;
        let discountTotal = randomTotal - discountPercentage;
        console.log(`Your new total is ${discountTotal.toFixed(2)}.`);
    }
    else if (luckyNumber == 4) {
        console.log(`Before discount, your total is $${randomTotal}.`);
        console.log(`Your discount is 50%.`);
        let discountPercentage = randomTotal * .5;
        let discountTotal = randomTotal - discountPercentage;
        console.log(`Your new total is $${discountTotal.toFixed(2)}.`);
    }
    else if (luckyNumber == 5) {
        console.log(`Before discount, your total is $${randomTotal}.`);
        console.log(`Your discount is 100%`);
        console.log(`You get it all for free!`);
    }
}
calculateTotal(randomDiscount,randomTotal);


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
calculateTotal(luckyNumber,randomTotal);

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


//
// let userConfirm = confirm(`Want to play a game?`);
// function clarifiedNumber() {
//     if (userConfirm === true) {
//         let userNumber = prompt("Give me a number.");
//         return userNumber;
//     } else {
//         alert(`Next time then.`)
//     }
// }
function evenOddSwitch(){
    let userConfirm = confirm(`Want to play a game?`);
    if (userConfirm === true) {
        let userNumber = prompt("Give me a number.");
        let numberPlus = parseInt(userNumber) + 100;
        alert(`Your number is ${userNumber}.`);
        alert(`${userNumber} plus 100 is ${numberPlus}.`);
        switch (numberPlus){
            case numberPlus % 2 === 0:
                alert(`${numberPlus} is even.`);
            case numberPlus % 2 === 1:
                alert(`${numberPlus} is odd.`);
            case numberPlus >= 0:
                alert(`This number is positive.`);
            case numberPlus <= 0:
                alert(`This number is negative.`);
            default:
                alert:(`This is not a number.`);
                break;
        }
    } else
        alert(`Another time then.`);
}
evenOddSwitch();