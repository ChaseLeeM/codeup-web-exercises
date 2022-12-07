console.log(`for_loops`);
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
function showMultiTable(numb) {
    for (let i = 1; i < 11; i++){
        let table = (`${numb} x ${i} = ${numb * i}`);
        console.log(table);
    }
}

showMultiTable(2);

//
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...
// Create a for loop that uses console.log to create the output shown below.
//
//
// for (let i = 0; i < 1000, i++) {
//     let isEven = getRandNumb() % 2 === 0;
//     let answer = `${getRandNumb()} is ${isEven ? 'even' : 'odd'}`;
//     console.log(answer);
// }
//
// function getRandNumb(input){
//     return Math.floor((Math.random() * 1000) + 1)
// }


// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// Create a for loop that uses console.log to create the output shown below.
//

for (let i = 0; i < 10; i++){
    let number = i + 1;
    let result = `${number}`;
    for (let j = 1; j <= i; j++){
        result += number;
    }
    console.log(result);
}

for (let i = 0; i < 9; i++) {
    let answer = String(i+1).repeat(i+1);
    console.log(answer);
}

//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for(let i = 100; i >= 5; i = i -5) {
    console.log(i);

}