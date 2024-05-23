console.log('***** Functions 3 *****');

// ******************************

/* JS assignment:
1. Create a function that takes three numbers and returns the sum of its cubes.
        Examples:
            sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
            sumOfCubes(2) ➞ 8 */

const sumOfCubes = (num1 = 0, num2 = 0, num3 = 0) => {
    let result = 0;
    let cubeOfNum1 = 1;
    let cubeOfNum2 = 1;
    let cubeOfNum3 = 1;
    for (let i = 1; i <= 3; i++) {
        cubeOfNum1 *= num1;
        cubeOfNum2 *= num2;
        cubeOfNum3 *= num3;
    }
    result = cubeOfNum1 + cubeOfNum2 + cubeOfNum3;
    return result;
}

console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes(2, 4));


//Another way to do it

const sumOfCubes2 = function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += Math.pow(arguments[i], 3)
    }
    return sum;
}

console.log(sumOfCubes2(1, 5, 9));
console.log(sumOfCubes2(2));
console.log(sumOfCubes2(2, 4));

// ******************************


/* JS assignment:
2. Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
        Examples:
            isLEQZero(3) ➞ false
            isLEQZero(0) ➞ true
            isLEQZero(-4) ➞ true
            isLEQZero(10) ➞ false */

const isLEQZero = (num) => {
    if (typeof (num) !== "number") {
        return false;
    }
    // Using return ends the function execution, hence the else is not necessary
    // else {
    if (num <= 0) {
        return true;
    }
    // else {
    return false;
    // }
    // }
}

console.log(isLEQZero(3));
console.log(isLEQZero(0));
console.log(isLEQZero(-4));
console.log(isLEQZero(10));
console.log(isLEQZero("hello"));


//Another way to do it

const isLEQZero2 = num => {
    return num <= 0;
}

console.log(isLEQZero2(3));
console.log(isLEQZero2(0));
console.log(isLEQZero2(-4));
console.log(isLEQZero2(10));
console.log(isLEQZero2("hello"));


// ******************************


/* JS assignment:
3. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
        Example:
            countOccurrences("this is a string", "i") ➞ 3 */

const countOccurrences = (str, letter) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count += 1;
        }
    }
    return count;
}

console.log(countOccurrences("this is a string", "i"));
console.log(countOccurrences("thIs is another strIng", "i"));
console.log(countOccurrences("Hello worLd, welcome!", "l"));

// Another way to do it

const countOccurrences2 = (str, letter) => {
    return str.toLowerCase().split(letter.toLowerCase()).length - 1;
}

console.log(countOccurrences2("this is a string", "i"));
console.log(countOccurrences2("thIs is another strIng", "i"));
console.log(countOccurrences2("Hello worLd, welcome!", "l"));

// ******************************


/* JS assignment:
4. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
        Total number of slices.
        Number of recipients.
        How many slices each person gets.
        Examples:
            isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
            isEqualSlices(8, 3, 2) ➞ true */

const isEqualSlices = (slices, recipients, portions) => {
    let totalPortions = recipients * portions;
    if ((typeof (slices) !== "number" || typeof (recipients) !== "number" || typeof (portions) !== "number")) {
        return "Invalid entry. This parameters can just be numbers";
    }
    else {
        if (slices >= totalPortions) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(isEqualSlices(11, 5, 3));
console.log(isEqualSlices(8, 3, 2));
console.log(isEqualSlices("hello", 3, 2));

//Another way to do it

const isEqualSlices2 = (slices, recipients, portions) => {
    return recipients * portions <= slices;
}


console.log(isEqualSlices2(11, 5, 3));
console.log(isEqualSlices2(8, 3, 2));
console.log(isEqualSlices2("hello", 3, 2));

// ******************************


/* JS assignment:
5. Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
        Notes:
            Return a boolean value (true or false).
            The string can contain any character.
            When neither an x nor an o is in the string, return true.
        Examples:
            isEqualNumXandO("ooxx") ➞ true
            isEqualNumXandO("xooxx") ➞ false
            isEqualNumXandO("ooxXm") ➞ true (case insensitive)
            isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o) */

const isEqualNumXandO = (str) => {
    let numX = 0;
    let numO = 0;
    let noXnoO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") {
            numX += 1;
        }
        else if (str[i].toLowerCase() === "o") {
            numO += 1;
        }
        else {
            noXnoO += 1;
        }
    }
    if (numX === numO || noXnoO === str.length - 1) {
        return true
    }
    else {
        return false
    }
}

console.log(isEqualNumXandO("ooxx"));
console.log(isEqualNumXandO("xooxx"));
console.log(isEqualNumXandO("ooxXm"));
console.log(isEqualNumXandO("zpzpzpp"));

//Another way to do it

const isEqualNumXandO2 = (str) => {
    let numX = 0;
    let numO = 0;
    str = str.toLowerCase();
    for (let char of str) {
        if (char === "x") numX++;
        if (char === "o") numO++;
    }
    return numX === numO;
}

console.log(isEqualNumXandO2("ooxx"));
console.log(isEqualNumXandO2("xooxx"));
console.log(isEqualNumXandO2("ooxXm"));
console.log(isEqualNumXandO2("zpzpzpp"));

// ******************************


/* JS assignment:
6. Create a function named howManyArgs, which returns the total amount of arguments passed to it.
        e.g
        console.log(howManyArgs()) ---> 0
        console.log(howManyArgs(1, false, "hello")) ---> 3
        console.log(howManyArgs("better")) ---> 1 */

const howManyArgs = function () {
    return arguments.length;
}

console.log(howManyArgs());
console.log(howManyArgs(1, false, "hello"));
console.log(howManyArgs("better"));

// ******************************


/* JS assignment:
7. Create a function named average, which accepts any amount of numbers and returns their mean average.
        e.g
        console.log(average(0)) ---> 0
        console.log(average(1, 2)) ---> 1.5
        console.log(average(1, 3, 6, 10)) ---> 5
        console.log(average(12, 14, 16)) ---> 14 */

function average() {
    if (arguments.length === 0) return 0;

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        // console.log(arguments[i]);
        sum += arguments[i];
    }

    return (sum / arguments.length).toFixed(2);
}

console.log(average(0));
console.log(average(1, 2));
console.log(average(1, 3, 6, 10));
console.log(average(12, 14, 16));
console.log(average(12, 37, 93));

//Another way to do it

const average2 = (...arg) => {
    let amountOfArg = arg.length;
    let sumOfArg = 0;
    for (let i = 0; i < amountOfArg; i++) {
        sumOfArg += arg[i];
    }
    let aver = (sumOfArg / amountOfArg).toFixed(2);
    return aver;
}

console.log(average2(0));
console.log(average2(1, 2));
console.log(average2(1, 3, 6, 10));
console.log(average2(12, 14, 16));
console.log(average2(12, 37, 93));