console.log('***** Loops *****');

/* JS assignment:
       1. Ask the user to input a number.Check the input of the user, if it is not a valid number then keep getting input from the user until provides a valid number.
           Example - 1: input = 1 => output = "That is a valid number"
           Example - 2: input = "a" => output = "That is not a valid number try again!" */

let num = +prompt("Enter a number");
// console.log(num);

while(isNaN(num)){
    alert("That is not a valid number try again!");
    num = +prompt("Enter a number");
}
console.log("That is a valid number");

// -----------------------------------------

/*JS assignment:
    2. Write a JavaScript program to compute the greatest common divisor(GCD) of two positive integers.
        Example: input1 = 18, input2 = 24 => output = "The greatest common divisor is 6" */

const num1 = 24;
const num2 = 12;

// // checking the small number
// let small;
// if (num1 < num2){
//     small = num1;
// }
// else {
//     small = num2;
// }

// It is better to use ternary to use less lines
 const small = num1 < num2 ? num1 : num2;
 console.log(small);

//More advanced would be to use the Math.min()
// const small = Math.min(num1, num2);

for (let i = small; i > 0 ; i--) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
        console.log(`${i} can divide both numbers`);
        // using break, the loop finishs when the if condition is true 
        break;
    }
}

// -----------------------------------------

/*JS assignment:
    3. Write a code that displays the factors of a number entered by the user.
        Example: input = 12 => output = "The factors of 12 are 1, 2, 3, 4, 6, 12 "  */

const number = 60;
let result = "";
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {2
        result += i + ", ";
    }
}

console.log(`The factors of ${number} are ${result.slice(0, result.length - 2)}.`);
// result.slice(0,result.length - 2) in that case it is "- 2" because the result has a coma after it

// -----------------------------------------


/*JS assignment:
    4. Write a JS code to find the given power of a number entered by the user
    Example: number = 4, power = 3 => output = 64 */

let num3 = 4;
let power = 3;
let result1 = 1;
for (let i = 1; i <= power; i++) {
    result1 *= num3;
    // console.log(result1);
}
console.log(`The power ${power} of ${num3} is ${result1}`);
// shorthand without using loops
console.log(`The ${num3} power to ${power} is ${num3 ** power}`);

// -----------------------------------------

/*JS assignment:
    5. Write a code to calculate the factorial of a number entered by the user.
        Example: input = 4 => output = "The factorial of 4 is 24"  
        4!= 4 * 3 * 2 * 1 = 24 */

let num4 = 4;
let factorial = 1;
for (let i = 1; i <= num4; i++) {
    factorial *= i;  //factorial = factorial * i
    console.log(factorial);
}
console.log(`The factorial of ${num4} is ${factorial}`);

// -----------------------------------------


/*
JS assignment:
    6. Write a JS code to print a pattern of a given number.
        Example: input = 8 => output =
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
    1 2 3 4 5 6
    1 2 3 4 5 6 7
    1 2 3 4 5 6 7 8
    */

let num5 = 8;
for (i = 1; i <= num5; i++) {
    let str = "";  
    for (j = 1; j <= i; j++) {
        str += j + " ";
    }
    console.log(str);
}

// -----------------------------------------


/*JS assignment:
7. Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000. */

let numDiv = "";
for (i = 100; i <= 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        numDiv += i + ", ";
        // console.log(numDiv);
    }
}
console.log(`The numbers between 100 and 1000 divisible by 3 and 5 are ${numDiv.slice(0, numDiv.length - 2)}.`);

// --------------------------------


/*JS assignment:
    8. Write a code that prints a multiplication table of numbers 1 to 10 */


for (i = 1; i <= 10; i++) {
    //inner loop is to create the multiplication table for i
    for (j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("---------------------------");
}


