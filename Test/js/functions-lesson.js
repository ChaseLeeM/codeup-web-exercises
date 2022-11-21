// let userName = prompt("What is your name?");
// let message = myFunction(userName);
// console.log(message);

// fight("Billy", "Bob")

(function (){
// IIFE Hack
    //Due to the way scoping works in JavaScript, it is considered a best practice to expose only what is necessary to the global scope.
    // As we saw in the examples above, global variables trickle down into the scope of other functions and could contaminate variables causing other scripts not to function properly.
    //
    // An Immediately-Invoked Function Expression (IIFE) is a tool that allows us to keep our variables isolated.
//    From this point forward, you should enclose all of your javascript code inside of an iife (including function definitions). Doing this protects our code from being exposed to the global scope.
})();
let person1 = "Billy";
let person2 = "Bob";

function myFunction(){
    return "Thank you, " + userName + ". You have ran myFunction.";
}

function fight(person1, person2){
    console.log(person1 + " punched " + person2 + " right in the kisser.");
}

function isEven(num){
    // Get the pieces of the puzzle.
    // Put the pieces into variables.
    let number = num;
    let answer = (number % 2 == 0);
    return answer;

}