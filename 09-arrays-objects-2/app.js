console.log("***** Arrays & Objects - 2 *****");

// ******************************

// JS assignment:
// 1. Write a JS code that counts how many vowels and consonants a string has that a user entered.
// Example: input = "Write a JS code that counts how many vowels and consonants a string has that a user entered"=> output= "This string has 25 vowels and 48 consonants"

const input =
  "Write a JS code that counts how many vowels and constants a string has that a user entered";

let vowels = ["A", "E", "I", "O", "U"];

let vowelsAndConstants = (str) => {
  const letters = str.split("");
  // console.log(letters);
  let result = letters.reduce(
    (acc, letter) => {
      if (letter === " ") return acc;
      if (vowels.includes(letter.toUpperCase())) acc.sumVowels += 1;
      else acc.sumConsonants++;
      return acc;
    },
    { sumVowels: 0, sumConsonants: 0 }
  );
  return `This string has ${result.sumVowels} vowels and ${result.sumConsonants} consonants`;
};

console.log(vowelsAndConstants(input));

// Another way to do it (without methods)

const consonants = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const vowelsAndConstants2 = (str) => {
  let vowelCounter = 0;
  let consCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toUpperCase())) vowelCounter++;
    else if (consonants.includes(str[i].toUpperCase())) consCounter++;
  }
  return `This string has ${vowelCounter} vowels and ${consCounter} consonants`;
};

console.log(vowelsAndConstants2(input));

// Another way to do it (with methods)
const vowelsAndConstants3 = (str) => {
  const letters = str.split("");
  const result = letters.reduce(
    (acc, letter) => {
      if (vowels.includes(letter.toUpperCase())) acc.vowels++;
      else if (consonants.includes(letter.toUpperCase())) acc.cons++;
      return acc;
    },
    { vowels: 0, cons: 0 }
  );
  // console.log(result);
  return `This string has ${result.vowels} vowels and ${result.cons} consonants`;
};

console.log(vowelsAndConstants3(input));


// ******************************

// JS assignment:
// 2. Write a JS code to copy all of the contents of obj1 to obj2 by doubling value numbers at below.
// Example: input = const obj1 = {'Apple': 15, 'Orange': 35, 'Melon': 20, 'Banana': 50, 'Pear': 40} => output = {'Apple': 30, 'Orange': 70, 'Melon': 40, 'Banana': 100, 'Pear': 80}

const obj1 = { Apple: 15, Orange: 35, Melon: 20, Banana: 50, Pear: 40 };

const doubleValue = (obj) => {
  let newObject = { ...obj1 };
  const keys = Object.keys(newObject);
  for (let key of keys) {
    newObject[key] = newObject[key] * 2; //newObject[key] in that case it is not necessary to use "" inside the [], because key is a variable or value with "Apple"
  }
  // console.log(keys);

  return newObject;
};

console.log(doubleValue(obj1));

//Another way to do it

const doubleValue2 = (obj) => {
  let newObject = {};
  const entries = Object.entries(obj);
  for (let [key, value] of entries) {
    newObject[key] = value * 2;
  }
  return newObject;
};

console.log(doubleValue2(obj1));

// ******************************

// JS assignment:
// 3. Write a JS code to sort by year (descending) list of used car dictionaries below
// Example:input = const cars = [  { make: 'Ford', model: 'F150 XLT', year: 2018, color: 'Gray' },  { make: 'Porsche', model: 'Cayman GT4', year: 2016, color: 'Gold' },  { make: 'Audi', model: 'S7 Prestige', year: 2017, color: 'Blue' },  { make: 'Mercedes', model: 'S550', year: 2019, color: 'Black' }] => output = [{ make: 'Mercedes', model: 'S550', year: 2019, color: 'Black' }, { make: 'Ford', model: 'F150 XLT', year: 2018, color: 'Gray' }, { make: 'Audi', model: 'S7 Prestige', year: 2017, color: 'Blue' },  { make: 'Porsche', model: 'Cayman GT4', year: 2016, color: 'Red'}]

const cars = [
  { make: "Ford", model: "F150 XLT", year: 2018, color: "Gray" },
  { make: "Porsche", model: "Cayman GT4", year: 2016, color: "Gold" },
  { make: "Audi", model: "S7 Prestige", year: 2017, color: "Blue" },
  { make: "Mercedes", model: "S550", year: 2019, color: "Black" },
];

const sortByYear = (arr) => {
  return arr.sort((first, second) => second.year - first.year);
};

console.log(sortByYear(cars));

// Another way to do it

const sortByYear2 = (arr) => {
  return arr.sort((a, b) => {
    if (a.year > b.year) return -1; //- numbers in that case go to the end (descendeing)
    if (a.year < b.year) return 1; //+ numbers in that case go to the start (descendeing)
    return 0;
  });
};

console.log(sortByYear2(cars));

// ******************************

// JS assignment:
// 4.To test a code, an object with students, lessons, and exam results of that lesson is needed. Write a JS code to generate the sample object below with random numbers between 35 and 100.
// Example: output=  {'Student-1': {'Lesson-1': 73, 'Lesson-2': 82, 'Lesson-3': 43, 'Lesson-4': 88, 'Lesson-5': 92}, 'Student-2': {'Lesson-1': 36, 'Lesson-2': 99, 'Lesson-3': 56, 'Lesson-4': 56, 'Lesson-5': 96}, 'Student-3': {'Lesson-1': 44, 'Lesson-2': 66, 'Lesson-3': 73, 'Lesson-4': 66, 'Lesson-5': 90}, 'Student-4': {'Lesson-1': 46, 'Lesson-2': 92, 'Lesson-3': 63, 'Lesson-4': 98, 'Lesson-5': 86}, 'Student-5': {'Lesson-1': 37, 'Lesson-2': 75, 'Lesson-3': 76, 'Lesson-4': 89, 'Lesson-5': 52}}

const examResults = () => {
  const result = {};
  for (let i = 1; i <= 5; i++) {
    result[`Student - ${i}`] = {};
    for (let j = 1; j <= 5; j++) {
      result[`Student - ${i}`][`Lesson - ${i}`] = Math.ceil(
        Math.random() * 65 + 35
      );
      //we have 65 numvers(35 to 100) and we dont want to start from 0, we want to start from 35 so we are adding 35
    }
  }

  return result;
};

console.log(examResults());

// ******************************

// JS assignment:
// 5.Write a JavaScript function to check whether an object contains given property
// Example - 1: input = const student = { name: 'David Rayy', sclass: 'VI', rollno: 12,// }, "name"=> output= true
// Example - 2: input =  const student = { name: 'David Rayy', sclass: 'VI', rollno: 12,// }, "score"=> output= false

const student = { name: "David Rayy", sclass: "VI", rollno: 12 };

const checkProperty = (obj, property) => {
  // console.log(obj, property);
  const keys = Object.keys(obj);
  // console.log(keys);
  return keys.includes(property);
};

console.log(checkProperty(student, "name")); //true
console.log(checkProperty(student, "score")); //false

// Another way to do it
const checkProperty2 = (obj, property) => {
  return obj.hasOwnProperty(property);
};

console.log(checkProperty2(student, "name")); //true
console.log(checkProperty2(student, "score")); //false

// Another way to do it
const checkProperty3 = (obj, property) => {
  return Boolean(obj?.[property]); //? is obj exists
};

console.log(checkProperty3(student, "name")); //true
console.log(checkProperty3(student, "score")); //false
