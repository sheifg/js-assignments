console.log("***** Arrays & Objects *****");

// ******************************

// JS assignment:
// 1. Write a JS code to filter strings that have more than 5 characters in the list below.
// Example: input = const words = ['car', 'elephant', 'desert', 'pumpkin', 'eat', 'fish', 'dish'] => output = ["elephant", "desert",  "pumpkin"]

const words = ["car", "elephant", "desert", "pumpkin", "eat", "fish", "dish"];

function filterStr(arr) {
  return arr.filter((word) => word.length > 5);
}

console.log(filterStr(words));

// Using arrow function

let filterStr2 = (arr) => {
  return arr.filter((word) => word.length > 5);
};

console.log(filterStr(words));

// ******************************

// JS assignment:
// 2. Write a JavaScript program to find duplicate values in a array
// Example: input = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6] => output = ["4", "7"]

const numbers = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];

function findDuplicateValues(arr) {
  let noDuplicates = [];
  let duplicateValues = arr.reduce((acc, item) => {
    if (!noDuplicates.includes(item)) {
      noDuplicates.push(item);
    } else if (!acc.includes(item)) {
        acc.push(item);
      }
    return acc;
  }, []);

  console.log("duplicateValues", duplicateValues);
}

findDuplicateValues(numbers);

//Another way to do it

const findDuplicateValues2 = (arr) => {
  // console.log(arr);
  return arr.reduce((acc, num) => {
    if (arr.indexOf(num) !== arr.lastIndexOf(num) && !acc.includes(num)) {
      acc.push(num);
    }
    return acc;
  }, []);
};

console.log(findDuplicateValues2(numbers));

// ******************************

// JS assignment:
// 3. Write a JavaScript program that square the value of every element in the array.
// Example: input = [1, 2, 3, 4, 5] => output = [1, 4, 9, 16, 25]

const input = [1, 2, 3, 4, 5];

function squareValue(arr) {
  return arr.map((item) => item ** 2);
}

console.log(squareValue(input));

// ******************************

// JS assignment:
// 4.The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
// Example: input = "George Raymond Richard Martin" => output = "GRRM"

let input2 = "George Raymond Richard Martin";

function abbName(arr) {
  // const words = arr.split(" ");
  // // console.log(words);
  // return words.map((item) => item[0]).join("");
  return arr
    .split(" ")
    .map((item) => item[0])
    .join("");
}

console.log(abbName(input2));

// ******************************

// JS assignment:
// 5. If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
// Example: input = const numbers = [1, -4, 12, 0, -3, 29, -150] => output = 42

const numbers2 = [1, -4, 12, 0, -3, 29, -150];

function sumOfPositives(arr) {
  return arr.reduce((acc, number) => {
    if (number < 0) {
      acc += 0;
    } else {
      acc += number;
    }
    return acc;
  }, 0);
}
console.log(sumOfPositives(numbers2));
console.log(sumOfPositives([]));
console.log(sumOfPositives([-1, -2, -3]));

//Another way to do it

const sumOfPositives2 = (arr) => {
  if (arr.length < 1) {
    return 0;
  }
  let sum = 0;
  arr.forEach((nbr) => {
    if (nbr > 0) {
      sum += nbr;
    }
  });
  return sum;
};

console.log(sumOfPositives2(numbers2));
console.log(sumOfPositives2([]));
console.log(sumOfPositives2([-1, -2, -3]));

//Another way to do it

function sumOfPositives3(arr) {
  arr = arr.filter((num) => num > 0);
  let sum = 0;
  arr.forEach((nbr) => (sum += nbr));
  return sum;
}

console.log(sumOfPositives3(numbers2));
console.log(sumOfPositives3([]));
console.log(sumOfPositives3([-1, -2, -3]));

// If the array is empty, reduce starts but does nothing, because there are no elements, so it will return acc(its initial value) that is 0.

// ******************************

// JS assignment:
// 6. Write a JS code that calculates the average of scores that students took in a math class below.
// Example: input = const scores = {  Mary: 85,  Susan: 75,  Barry: 65,  Alexis: 88,  Jane: 45,  Tina: 100,  Tom: 90,  Tim: 60,}  => output = 76

const scores = {
  Mary: 85,
  Susan: 75,
  Barry: 65,
  Alexis: 88,
  Jane: 45,
  Tina: 100,
  Tom: 90,
  Tim: 60,
};

function calculateAverage(obj) {
  let grades = Object.values(obj);
  //   console.log(grades);
  if (grades.length === 0) return "Empty Object";
  let sumScores = grades.reduce((acc, grade) => acc + grade, 0);
  return (sumScores / grades.length).toFixed(2);
}

console.log(calculateAverage(scores));

// ******************************

// JS assignment:
// 7. Write a JS code to display the repetition number of each character in a string.
// Example: input = "www.clarusway.com" => output = {'w': 4, '.': 2, 'c': 2, 'l': 1, 'a': 2, 'r': 1, 'u': 1, 's': 1, 'y': 1, 'o': 1, 'm': 1}
let newInput = "www.clarusway.com";

function repetitionNumberOfChar(str) {
  const character = str.split("");
  // console.log(character);
  const letterCounts = character.reduce((acc, char) => {
    if (acc[char]) {                  // e.g. For first character -> acc[w]: undefined, so it means false and goes to the else{}
      acc[char]++;
    } else {
      acc[char] = 1;
    }
    console.log(acc);
    return acc;
  }, {});
  return letterCounts;
}

console.log(repetitionNumberOfChar(newInput));
