(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


let person = {
        firstName: 'Chase',
        lastName: 'Medford',
        sayHello: function (){
            console.log(`Hello, from ${this.firstName} ${this.lastName}.`);
        }
    }

console.log(person.firstName);
console.log(person.lastName);
person.sayHello();

person.middleName = 'Lee';
    console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

// function easyDollars(input){
//
// }

shoppers.forEach(function (spender){
    if (spender.amount > 200){
       let discount = (spender.amount * .12);
       let total = (spender.amount - discount);
        console.log(`${spender.name} owes ${spender.amount.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}, earning them a 12% discount! You saved ${discount.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}. Your new total is ${total.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}.`);
    } else {
        console.log(`Sorry, ${spender.name}, no discount for you. Your total is ${spender.amount.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}.`);
    }
});


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

const books = [
        {
            title: 'Blood Meridian',
            author: {
                firstName: 'Cormac',
                lastName: 'McCarthy',
             }
        },
        {
            title: "Pillars of the Earth",
            author: {
                firstName: 'Ken',
                lastName: 'Follet',
            }
        },
        {
            title: "Magicians Apprentice",
            author: {
                firstName: 'Raymond',
                lastName: 'Feist',
            }
        },
        {
            title: "A Man Without a Country",
            author: {
                firstName: 'Kurt',
                lastName: 'Vonnegut',
            }
        },
        {
            title: "On the Road",
            author: {
                firstName: 'Jack',
                lastName: 'Kerouac',
            }
        }
];
    console.log(books);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

function booksList(){
    books.forEach(function (book){
        console.log(`Book #${books.indexOf(book) + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
})}

booksList();

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
// let newBook;
function createBook(newTitle,newFirstName,newLastName){
    let newBook = {
                title: newTitle,
                author: {
                    firstName: newFirstName,
                    lastName: newLastName,
                }
            }
        books.push(newBook);
    return newBook;
}
createBook('House of Leaves','Mark','Danielewski');

// function showBookInfo(){
//     books.forEach(function (book){
//         let message =
//         console.log(`Book #${books.indexOf(book) + 1}`);
//         console.log(`Title: ${book.title}`);
//         console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
//     })}

booksList();

})();
