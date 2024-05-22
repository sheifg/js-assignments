console.log('***** Functions 2 *****');

// ******************************

/* JS assignment:
1. Write a function to convert Celsius to Fahrenheit or Fahrenheit to Celsius according to the input.
Example -1: input=(20, "C") => output="68F"
Example - 2: input=(104, "F")=> output="40C" */

const convertTemperature = (deg, unit) => {
    let result;
    if (Number(deg)) {
        if (unit.toUpperCase() === "C") {
            result = (deg * (9 / 5)) + 32;
            return `${result}F`
        }
        else if (unit.toUpperCase() === "F") {
            result = (deg - 32) * (5 / 9);
            return `${result}C`
        }
        else {
            console.log("This value does not correspond to any type of temperature. The accepted values are 'C'(celsius) or 'F'(farenheit)");
        }
    } else {
        return "Enter a number for degrees";
    }
}

console.log(convertTemperature(20, "C"));
console.log(convertTemperature(104, "F"));
console.log(convertTemperature(104, "p"));
console.log(convertTemperature("Hello", "F"));

// ---- Another way to do it ---- 

const celToFr = deg => (deg * 9) / 5 + 32;
const frToCel = deg => ((deg - 32) * 5) / 9;

const convertTemperature2 = (deg, unit) => {
    if (Number(deg)) {
        if (unit.toUpperCase() === "C") {
            return celToFr(deg);
        } else if (unit.toUpperCase() === "F") {
            return frToCel(deg);
        } else {
            return "Enter a valid unit: C / F";
        }
    } else {
        return "Enter a number for degrees";
    }
};

console.log(convertTemperature2(20, "C"));
console.log(convertTemperature2(104, "F"));
console.log(convertTemperature2(104, "p"));
console.log(convertTemperature("Hello", "F"));


// ******************************


/*JS assignment:
2. Write a JavaScript function which returns the n rows by n columns identity matrix.
Example: input= 4 => output=
1  0  0  0
----------
0  1  0  0
----------
0  0  1  0
----------
0  0  0  1
----------
*/

const identityMatrix = (n) => {
    let result = [];
    for (let i = 0; i < n; i++) {
        result[i] = [];
        for (let j = 0; j < n; j++) {
            if (j === i) {
                result[i][j] = 1;
                // console.log(result);
            }
            else {
                result[i][j] = 0;
                // console.log(result);
            }
        }
    }
    return result;
}

console.log(identityMatrix(4));

// ---- Another way to do it ---- 

const identityMatrix2 = (n) => {
    let result = [], col;
    // let result = [];
    // let col;
    for (let i = 0; i < n; i++) {
        col = [];
        for (let j = 0; j < n; j++) {
            if (j === i) {
                col.push(1);
                // console.log(result);
            }
            else {
                col.push(0);
                // console.log(result);
            }
        }
        result.push(col);
    }
    return result;
}

console.log(identityMatrix2(4));

// ---- Using strings ---- 

const identityMatrix3 = n => {
    for (let i = 0; i < n; i++) {
        let column = "";
        for (let j = 0; j < n; j++) {
            if (i === j) {
                column += 1;
            }
            else {
                column += 0;
            }
        }
        console.log(column);
        console.log("----------")
    }
}

identityMatrix3(4);

// ******************************


/*JS assignment:
3. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
Example: input=(2, 3) => output=8 */

const compute = (n, exp) => {
    let result = 1;
    for (let i = 1; i <= exp; i++) {
        result *= n;
    }
    return result;
    // return n ** b;
    // Using directly the exponential equation it is also correct but it is better to show that you understand the logic and you can make your own function to do it.
}

console.log(compute(2, 3));
console.log(compute(3, 3));
console.log(compute(5, 2));


// ******************************


/*JS assignment:
4. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1
Example: input=("Connect") => output="tonnecC" */

const changeFirstAndLast = (str) => {
    let result = "";
    if (str.length <= 1) {
        return str;
    }
    else {
        let middle = str.slice(1, str.length - 1);
        // console.log(middle);
        result = `${str[str.length - 1]}${middle}${str[0]}`;
        // console.log(result);
    }
    return result;
}

console.log(changeFirstAndLast("Connect"));
console.log(changeFirstAndLast("ab"));
console.log(changeFirstAndLast("A"));
console.log(changeFirstAndLast(" "));


// ---- Another way to do it ----

const changeFirstAndLast2 = str => {
  if (str.length <= 1) {
    return str;
  } else {
    const start = str[0];
    const end = str[str.length - 1];
    let middle = "";
    for (let i = 1; i < str.length - 1; i++) {
      middle += str[i];
    }
    return end + middle + start;
  }
};

console.log(changeFirstAndLast2('Connect'));
console.log(changeFirstAndLast2("ab"));
console.log(changeFirstAndLast2("A"));
console.log(changeFirstAndLast2(" "));


// ******************************


/*JS assignment:
5. Create a function to check the remainder of division given two numbers as argument.
     Example: remainder(8,3) --> 2*/

const remainder = (num1, num2) => {
    if (num2 != 0) {
        return num1 % num2;
    }
    else {
        return "Error: Division by zero is not defined";
    }
}

console.log(remainder(8, 3));
console.log(remainder(8, 4));
console.log(remainder(13, 0));


// ******************************


/*JS assignment:
6. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
        Examples:
            sumIntFrom1ToN(4) ➞ 10
            sumIntFrom1ToN(13) ➞ 91 */

const sumIntFrom1ToN = (integer) => {
    let sum = 0;
    if (integer < 1) {
        return "Please provide positive numbers";
    }
    else {
        for (let i = 1; i <= integer; i++) {
            sum += i;
        }
        return sum;
    }
}

console.log(sumIntFrom1ToN(1));
console.log(sumIntFrom1ToN(4));
console.log(sumIntFrom1ToN(13));
console.log(sumIntFrom1ToN(-3));

// ---- Another way to do it ----

const sumIntFrom1ToN2 = n => {
    if (n < 1) {
        return "Please provide positive numbers";
    } else {
        return (n * (n + 1)) / 2;
    }
};

console.log(sumIntFrom1ToN2(1));
console.log(sumIntFrom1ToN2(4));
console.log(sumIntFrom1ToN2(13));
console.log(sumIntFrom1ToN2(-3));

console.log("------------------------------------");


















