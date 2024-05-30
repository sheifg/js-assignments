console.log("***** Arrays *****");

// ******************************

// JS assignment:
// 1. Write a simple JavaScript program to join all elements of the following array into a string.
// Example: input =  ["Red", "Green", "White", "Black"]   => output= "Red,Green,White,Black"

const array = ["Red", "Green", "White", "Black"];

// Solution with methods

const arrToStr = function (arr) {
    return arr.join(", ");
}

console.log(arrToStr(array));


// Solution without methods

const arrToStr2 = arr => {
    let newStr = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            newStr += arr[i];
        } else {
            newStr += arr[i] + ", ";
        }
    }
    return newStr;
};

console.log(arrToStr2(array))


// ******************************


// JS assignment:
// 2. Write a JavaScript program to sort the items of an array
// Example: input = [-3, 8, 7, 6, 5, -4, 3, 2, 1]  => output = [-4, -3, 1, 2, 3, 5, 6, 7, 8]

const array2 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// Solution with methods

const sortArr = function (arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortArr(array2));

// Solution without methods

const sortArr2 = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

console.log(sortArr2(array2));


// ******************************


// JS assignment:
// 3. Write a JavaScript program to find the most frequent item of an array
// Example: input = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3] => output = "a is repeated most"

const array3 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

const freqItemArr = arr => {
    let mostRepeated;
    let mostRepeatedCount = 0;
    let currentCharCount = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCharCount++;
            // console.log(count);
        } else {
            currentCharCount = 1;
        }
        if (currentCharCount > mostRepeatedCount) {
            mostRepeatedCount = currentCharCount;
            console.log(mostRepeatedCount);
            mostRepeated = arr[i];
            // console.log(mostRepeated);
        }
    }
    return `The most frecuent element in our array is ${mostRepeated}.`;
}

console.log(freqItemArr(array3));

// ******************************

// JS assignment:
// 4. Given a list of numbers and a number k, return whether any two numbers from the list add up to k
// Example: input = [10, 15, 3, 7], k = 17 => output = true

const array4 = [10, 15, 3, 7];
const k = 17;

// Solution without methods

const checkSum = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                return true
            }
        }
        console.log(i);

    }
};

console.log(checkSum(array4, k));


// Solution with methods

const checkSum2 = (arr, num) => {
    for (let item of arr) {
        if (arr.includes(num - item)
            &&
            (num - item !== item || arr.indexOf(item) !== arr.lastIndexOf(item))
        ) return true;
    }
    return false;
};

console.log(checkSum2(array4, k));


// ******************************

// JS assignment:
// 5. Write a JavaScript function to find the difference of two arrays
// Example: input = difference([1, 2, 3], [100, 2, 1, 10]) => output = [3, 10, 100]

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];

const differenceOfArrays = (arr1, arr2) => {
    const diffArr = [];
    for (let item of arr1) {
        if (!arr2.includes(item)) {
            diffArr.push(item);
        }
    }
    for (let item of arr2) {
        if (!arr1.includes(item)) {
            diffArr.push(item);
        }
    }
    return diffArr.sort((x, y) => x - y);
};

console.log(differenceOfArrays(arr1, arr2));

// ******************************