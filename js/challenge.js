/*
1. Create a faulty calculator using JavaScript

This faulty calculator does the following:
1. It takes two numbers as input form the user
2. It performs wrong operations as follows:

+ ---> -
- ---> +
* ---> /
/ ---> *

It performs the wrong operation 10% of the time.
*/

//!----------------------------- //
//!---- 1. Solution Start ------ //
//!----------------------------- //

let firstNumber = prompt('Enter first number');
let operator = prompt('Enter operator');
let secondNumber = prompt('Enter second number');
let randomNumber = Math.ceil(Math.random() * 10);
console.log('randomNumber',randomNumber);

let wrongOperations = {
   '+' : '-', 
   '-' : '+', 
   '*' : '/', 
   '/' : '*', 
};

if (randomNumber > 10) 
{
    console.log(`Faulty Value is :- ${eval(`${firstNumber} ${operator} ${secondNumber}`)}`);
}
else 
{
    operator = wrongOperations[operator];
    console.log(`Faulty Value is :- ${eval(`${firstNumber} ${operator} ${secondNumber}`)}`);
};

//!----------------------------- //
//!------ 1. Solution End ------ //
//!----------------------------- //

/*
2. Create a business name generator by combining list of adjectives and 
   shop name and another word without Array!

 Adjectives: 
 Crazy
 Amazing
 Fire

 Shop Name: 
 Engine
 Foods
 Garments

 Other Words: 
 Bros
 Limited
 Hub
*/

//!----------------------------- //
//!---- 2. Solution Start ------ //
//!----------------------------- //

let randomNo_1 = Math.ceil(Math.random() * 3);
let randomNo_2 = Math.ceil(Math.random() * 3);
let randomNo_3 = Math.ceil(Math.random() * 3);

let adjectiveList = {
  1 : 'Crazy',  
  2 : 'Amazing',  
  3 : 'Fire',  
};

let shopNameList = {
  1 : 'Engine',  
  2 : 'Foods',  
  3 : 'Garments',  
};

let otherWordsList = {
  1 : 'Bros',  
  2 : 'Limited',  
  3 : 'Hub',  
};

let function_1 = () => {
    if (randomNo_1 == 1) {
        return adjectiveList[1];
    } else if (randomNo_1 == 2) {
        return adjectiveList[2];
    } else {
        return adjectiveList[3];
    }
};

let function_2 = () => {
    if (randomNo_2 == 1) {
        return shopNameList[1];
    } else if (randomNo_2 == 2) {
        return shopNameList[2];
    } else {
        return shopNameList[3];
    }
};

let function_3 = () => {
    if (randomNo_3 == 1) {
        return otherWordsList[1];
    } else if (randomNo_3 == 2) {
        return otherWordsList[2];
    } else {
        return otherWordsList[3];
    }
};
 
console.log(`Business Name Generator is :- ${function_1()} ${function_2()} ${function_3()}`);

//!----------------------------- //
//!------ 2. Solution End ------ //
//!----------------------------- //