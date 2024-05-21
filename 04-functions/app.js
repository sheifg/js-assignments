console.log('***** Functions *****');

/* JS assignment:
1. Write a JS code to display Perfect Numbers from 1 to 1000.
A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. (6 = 1 + 2 + 3)
Example - 1: input= 6 => output="6 is a Perfect Number"
Example - 2: input= 10 => output="10 isn't a Perfect Number" */

const perfectNumbers = () => {
    for(let i = 1; i <= 1000; i++) {
        // console.log(i);
        let sumOfDivisor = 0;
        // we are getting all the numbers prior than the number that we are checking in the first loop, because we have to exclude itself
        for(let j = i - 1; j > 0; j--) {
            // console.log(i, ",", j);
            if(i % j === 0){
                sumOfDivisor += j;
            }
            }
            if(sumOfDivisor === i){
                console.log(`${i} is a perfect nunber`)
        }
    }
}

perfectNumbers();


// ******************************


/* JS assignment:
2. Write a JavaScript function to extract a specified number of characters from a string.
Example: input=func("Clarusway",6) => output="Clarus" */

let input = "Clarusway";
let num = 6;

const extraxtLetters = (str, num) => {
    let newWord = "";
    for(let i = 0; i < num; i++) {
        newWord += str[i];
    }
    return newWord;
}

console.log(extraxtLetters(input, num));
console.log(extraxtLetters("Hello is me", 8));
console.log("----------------");


// ******************************


/* JS assignment:
3. Write a JavaScript function that generates a string id (specified length) of random characters.
char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
Example -1: input=4 => output="A8Sf"
Example - 2: input=8=> output="29SaBfgu" */

const char_list ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const passwordGenerator = nbr => {
  let newPass = '';
  for (let i = 1; i <= nbr; i++) {
    const randomNumber = Math.floor(Math.random() * char_list.length);
    // console.log(char_list[randomNumber], randomNumber);
    newPass += char_list[randomNumber];
  }
  return newPass;
};

console.log(passwordGenerator(8));
console.log(passwordGenerator(4));

// ******************************


/* JS assignment:
4. Write a function to find the area and perimeter of a Circle
Perimeter is 2*pi*rad
Area is pi*rad^2
Example - 1: input= 10 => output="Perimeter: 62.83, Area: 314.15"
Example - 2: input= 15 => output="Perimeter: 94.94, Area: 706.84" */

const input2 = 10;
const input3 = 15;

const circleValues = rad => {
  const perimeter = 2 * Math.PI * rad;
  const area = Math.PI * rad ** 2;
  return `Perimeter: ${perimeter.toFixed(2)}, Area: ${area.toFixed(2)}`;
};

console.log(circleValues(input2));
console.log(circleValues(input3));


// ******************************


/* JS assignment:
5. Write a function to find the count of a specific letter in a string
Example: input=("Connect",c) => output=2
Example: input=("first person",c) => output=2 */

const charCounter = (str, char) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char.toLowerCase()) counter++;
  }
  return counter;
};

console.log(charCounter('Connect', 'c'));                
console.log(charCounter('first person shooter', 's')); 


// ******************************


/* JS assignment:
6. Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
The user should have 5 chance to guess the number.
If the number entered by the user:
is greater than the random number then warn user to decrease,
is less than the random number then warn user to increase,
is equal to the random number then congratulate the user and tell in how many guesses were used to find the number
If user can’t find the number in 5 guess then game is lost and display the random number.
Hint: you can use this code to generate random number 0-100
const winingNumber = Math.round(Math.random() * 100); */

const guessingGame = () => {
  let life = 5;
  const winnigNumber = Math.floor(Math.random() * 100 + 1);
  console.log(winnigNumber);
  let guessedNumber;

  do {
    guessedNumber = Number(prompt('Enter a number between 1 to 100:'));
    if (guessedNumber === winnigNumber) {
      console.log('Congrats you have found the number ► ♫');
      break;
    } else {
      console.log(`You have ${life - 1} number of tries`);
      if (guessedNumber > winnigNumber) {
        console.log('Guess lower ↓');
      } else {
        console.log('Guess higher ↑');
      }
    }
    console.log(guessedNumber);
    life--;
  } while (life > 0);

  if (life === 0) {
    console.log('Sorry you lost the game, winning number was: ' + winnigNumber);
  }
};

guessingGame();

// console.log(Math.floor(2.4496)); --> Goes to the number before the decimal point
// console.log(Math.round(2.4496)); --> Rounds the number
// console.log(Math.ceil(2.4496));  --> 5Goes to the number + 1 before the decimal point

// ******************************


