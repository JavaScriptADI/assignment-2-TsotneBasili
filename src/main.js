// Work in this directory: src
// 1
let string1 = "oriori";
console.log(string1);

// 2
// "5" is a string and 5 is a Number, they are different data types

// 3
let number1 = 10;
console.log(number1);

// 4
let booleanVar = false;
console.log(booleanVar);

// 5
//boolean operators: ==, ===, !=, !==, <, >, <=, >=, &&, ||, !, &, |, ^, typeof, instanceof, ?., ??.

// 6
let word1 = "Hello";
word1 = word1.toUpperCase();
console.log(word1);

// 7
let word2 = "World";
word2 = word2.toLowerCase();
console.log(word2);

// 8
// the value of the variable text is still 'Hello'

// 9
// the value of the variable text is unefined

// 10
// let text = 'Hello';
// console.log(text.toLowercase());
// the mistake in this code is case sensitivity, because case in toLowerCase is in small cap c
// here is the way it should be to work 
let text = 'Hello';
console.log(text.toLowerCase());

// 11
let age = prompt('How old are you?');
// let nextAge = age + 1; adding strin to number
let nextAge = Number(age) + 1; //converting string to number to add numbers
console.log(`Next year you will be ${nextAge}`);

// 12
let name2 = prompt('What is your name?');
let age2 = Number(prompt('How old are you?'));
let isInSixties = age2 >= 60 && age2 < 70;// finish the code so that it prints true if the age is in 60s
console.log(`${name2} is in sixties: ${isInSixties}`);

// 13
// let x = 5;
// console.log(x++);
// console.log(x);
// x value is 5 in first console log because x is still 5 before printing ad incrementing takes place after x value is presented 
// and 6 in second as x value was already incremente dby one in first console log.

// 14 
// let y = 5;
// console.log(++y);
// console.log(y);
// y value is 6 in both console logs, because y is first incremented and then presented in the log console 
// and in second console it's already incremented too.

// 15 What is x++ and x--?
// one is incrementing x by 1 and second in decrementing x by 1

// 16 What is the difference between ++x and x++?
//  in first cae addition of 1 happens firt and then comes x as expression already incremented, in second x is expressed first and then incremented by 1

// 17 If we try to declare variable without any value, what will be the value of the variable in the console?
// undefined 

// 18 Show the example of equality operator.
let number4 = 5;
let number5 = 5;
number4 === number5;

// 19 Show the example of not equal operator.
let number6 = 5;
let number7 = 5;
number6 != number7; 

// 20 What's going on when we try to add string and number?
// number will be converted in string and two string will be just sticked to each other.