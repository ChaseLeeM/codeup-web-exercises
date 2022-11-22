// let userName = prompt("What is your name?");
// let message = myFunction(userName);
// console.log(message);

// fight("Billy", "Bob")

//(function (){
// IIFE Hack
    //Due to the way scoping works in JavaScript, it is considered a best practice to expose only what is necessary to the global scope.
    // As we saw in the examples above, global variables trickle down into the scope of other functions and could contaminate variables causing other scripts not to function properly.
    //
    // An Immediately-Invoked Function Expression (IIFE) is a tool that allows us to keep our variables isolated.
//    From this point forward, you should enclose all of your javascript code inside of an iife (including function definitions). Doing this protects our code from being exposed to the global scope.
//})();
// let person1 = "Billy";
// let person2 = "Bob";
// let userName = prompt("Who are you?")
//
// function myFunction(){
//     return "Thank you, " + userName + ". You have ran myFunction.";
// }
//
// function fight(person1, person2){
//     console.log(person1 + " punched " + person2 + " right in the kisser.");
// }
//
// function isEven(num){
//     Get the pieces of the puzzle.
//     Put the pieces into variables.
    // let number = num;
    // let answer = (number % 2 == 0);
    // return answer;
//
// }

// ARROW FUNCTION
//    Simplified string entry, but can only be called after the function, not before.
// let name = 'Chase'
// const sayHello = (name) => {
//     let message = `Hello, ${name}!`
//     return message;
// }
// console.log(sayHello(name));

//***RANDOM NUMBER FUNCTION***
// let random = Math.floor((Math.random() * 1000) + 1);

//IF/ELSE statements
// let condition = true;
// let city = prompt("Where are you?")

// if (condition){
// if (city == "San Antonio") {
//     console.log(`Go Spurs Go`);
// } else if (city == "Boston"){
//     console.log(`Red Sox, really?`);
// } else if (city == city) {
//     console.log(`${city}, huh?`);
//     console.log(`Find a better city.`);
// } else {
//     console.log("Never heard of that place.")
// }

// let random = Math.floor((Math.random() * 1000) + 1);
// console.log(addNumbers(random));
// function addNumbers(num1) {
//     console.log(random)
//     if (typeof num1 == "string") {
//         num1 = parseInt(num1);
//     }
//     else {
//         return num1 + 2;
//     }
// }

// let pizzaPreference = prompt("What is your favorite kind of pizza?");
// if (pizzaPreference.toLowerCase() == "cheese") {
//     console.log("Thanks, Kevin.");
// } else if (pizzaPreference.toLowerCase() == "Pineapple") {
//     console.log("Rebel.");
// } else {
//     console.log("My aunt's a vegan too.")
// }

//TERNARY OPERATOR (SHORTHAND IF/ELSE)
//Meant to be very simple without nested statements in the shorthand.**

// var message;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
//
// the above if/else can be re-written as:
// var message = (success) ? "Operation was successful." : "Oops, something went wrong.";
// console.log(message);

//SWITCHES
//Cases have to be specific. Cannot run comparisons within statements.
// let pizzaPreference = prompt("What is your favorite pizza topping?")
// switch(pizzaPreference.toLowerCase()){
//     case "cheese":
//         console.log("Ok, Kevin.");
//         break;
//         **Without "break" it will fall through and continue to the next case.**
    // case "pineapple":
    //     console.log("Rebel.");
    //     break;
    // default:
    //     console.log("Yeah, I guess that's alright.");
    //     break;
// }
//**Removing breaks to allow value to fall through.
let random = Math.floor((Math.random() * 10) + 1);
switch (random){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log(`The number is ${random} and came before 5.`);
        break;
    case 5:
    case 6:
    case 7:
        console.log(`The number is ${random} and came between 5 and 7.`);
        break;
    default:
        console.log(`The number is ${random} and came after 7.`)
}