// Create a file named while.js in the js directory.
//
//     Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// let multiplyBy = 2;
// let counter = 0;
// while (counter < 16){
//     console.log(multiplyBy);
//     multiplyBy = multiplyBy * 2;
//     counter++;
// }
//
// for (let i = 0, num = 2; i < 16; i++){
//     console.log(num);
//     num *= 2
// }

// Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
//
//
// This is how you get a random number between 50 and 100
let totalCones = Math.floor(Math.random() * 50) + 50;

// This expression will generate a random number between 1 and 5
let conesSold = Math.floor(Math.random() * 5) + 1;

// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones
//     1. Finally, commit the changes to your git repository, and push to GitHub.


do {
    if (conesSold <= totalCones) {
        console.log(`${conesSold} cones sold...`);
        totalCones -= conesSold;
    } else {
        console.log(`Cannot sell you ${conesSold} cones, I only have ${totalCones}.`);
        console.log(`${conesSold} cones sold.`);
        totalCones -= totalCones;
    }
    if (totalCones === 0) {
        console.log(`Yay, I sold all my cones!`);
        break;
    }

} while (totalCones > 0);
//doesn't work yet