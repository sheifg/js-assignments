console.log('***** Strings *****');

/* JS assignment: 
1. Write a JavaScript function to convert a string into an abbreviated form.
Example-1: input = “John Doe”  => output= "John D."
Example-2: input = “John”  => output= "John"
Example-3: input = “John Doe Marcus”  => output= "John D." */

function convert(str) {
    let separate = str.split(' ');
    // console.log(separate);
    let result = "";
    result = separate[0] + (" " + separate[1].slice(0, 1) + ".");
    return result;
}
console.log(convert("John Doe"));
console.log("---------------------------");

// Solution without methods

const input = "John Doe Marcus";
const convert2 = str => {
    let indexOfSpace = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            indexOfSpace = i;
            break;
        }
    }
    if (indexOfSpace === 0) {
        return str;
    }
    else {
        let newStr = "";
        for (let i = 0; i < indexOfSpace; i++) {
            newStr += str[i];
        }
        return (newStr += " " + str[indexOfSpace + 1] + ".");
    }
}
console.log(convert2(input));

console.log("---------------------------");

// ******************************


/* JS assignment:
2. Write a JavaScript function to hide email addresses to protect them from unauthorized users. Hint: Just display half of the characters before the @ sign in the email address
Example: input = "nurettin@clarusway.com" => output = "nur*****@clarusway" */

function hideEmail(email) {
    let atSign = email.indexOf("@");
    console.log(atSign);
    let halfEmail = atSign / 2;
    console.log(halfEmail);
    let partEmail = email.slice(halfEmail, atSign);
    console.log(partEmail);
    const stars = "*".repeat(partEmail.length)
    let hiddenEmail = email.replace(partEmail, stars);
    console.log(hiddenEmail);
}

hideEmail("nurettin@clarusway.com");
console.log("---------------------------");

// Solution without methods

const input2 = 'nurettin@clarusway.com';

const hideEmail2 = str => {
    let positionOfAt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '@') {
            positionOfAt = i;
            break;
        }
    }
    let firstPart = '';
    let secondPart = '';
    for (let i = 0; i < positionOfAt; i++) {
        firstPart += str[i];
    }
    for (let i = positionOfAt; i < str.length; i++) {
        secondPart += str[i];
    }
    const averageFirstPart = Math.floor(firstPart.length / 2);
    const star = '*';
    let newName = '';
    for (let i = 0; i < averageFirstPart; i++) {
        newName += firstPart[i];
    }
    for (let i = averageFirstPart; i < firstPart.length; i++) {
        newName += star;
    }
    return newName + secondPart;
}
    console.log(hideEmail2(input2));

    // ******************************


    /* JS assignment:
    3. Write a JavaScript function to convert a string into a title format (The first letters of each word should be in capital letters)
    Example: input = 'CLARUSWAY is a bOoTcAmP' => output = "Clarusway Is A Bootcamp" */

    function title(str) {
        //change all letters to lower case and separate the string for words through the spaces in an array
        let lowerCase = str.toLowerCase().split(" ");
        //create a variable as a string for the final result
        let finalResult = "";
        for (i = 0; i < lowerCase.length; i++) {
            // assign the item[i] of the array to a new variable
            let word = lowerCase[i];
            // console.log(word);
            // // charAt(): returns the character at the specified index in a string. In that case I want the index of the first character(frist letter of each item in the array), that it is 0
            // let firstLetter = word.charAt(0);
            // // console.log(firstLetter);
            // // change the first letter of each item in the array to capital letter
            // let capitalize = firstLetter.toUpperCase();
            // // console.log(capitalize);
            let capitalize = word.charAt(0).toUpperCase();
            let rest = word.substring(1, word.length);
            // console.log(rest);
            let result = capitalize + rest;
            // console.log(result);
            finalResult += `${result}`;
        }
        return finalResult;
    }

    console.log(title("CLARUSWAY is a bOoTcAmP"));
    console.log("---------------------------");

    // Solution without methods

    const input3 = 'CLARUSWAY is a bOoTcAmP';

    const title2 = str => {
        let title = '';
        let convert = true;
        for (let i = 0; i < str.length; i++) {
          if (convert) {
            title += str[i].toUpperCase();
            convert = false;
          } else {
            title += str[i].toLowerCase();
          }
          if (str[i] === ' ') {
            convert = true;
          }
        }
        return title;
    }
    console.log(title2(input3));


    // ******************************

    /* JS assignment:
    4. Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers.
    Example: input =  '025468' => output = `0 - 254 - 6 - 8'  */

    const input4 = 254680

    function numbers(number) {
        let str = number.toString();
        // console.log(str);
        let result = "";
        for (i = 0; i < str.length; i++) {
            // using % modulus, it converts the str[i] to number
            if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
                result += str[i] + "-";
            }
            else {
                result += str[i];
            }
            // console.log(result);
        }
        return result;
    }

    console.log(numbers(input4));
    console.log("---------------------------");

    // ******************************


    /* JS assignment:
    5. Write a JavaScript program that accepts a string as input and swap the case of each character
    Example: input = 'The Quick Brown Fox' => output = 'tHE qUICK bROWN fOX' */

    function swap(str) {
        const alpLower = "abcdefghijklmnopqrstuvwxyz";
        const alpUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = "";
        let finalResult = "";
        for (let i = 0; i < str.length; i++) {
            for (j = 0; j < alpLower.length; j++) {
                const charLower = alpLower[j];
                const charUpper = alpUpper[j];
                if (str[i] === charLower) {
                    result = str[i].toUpperCase();
                    // console.log(result);
                }
                else if (str[i] === charUpper) {
                    result = str[i].toLowerCase();
                    // console.log(result);
                }
                else if (str[i] === " ") {
                    result = str[i];
                }
            }
            finalResult += result;
            // console.log(finalResult);
        }
        console.log(finalResult);
    }

    swap("The Quick Brown Fox");


    //Better way to do it

    let input5 = "The Quick Brown Fox";

    function swap2(str) {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i].toLowerCase()) {
                result += str[i].toUpperCase();
            }
            else {
                result += str[i].toLowerCase();
            }
        }
        return result;
    }

    console.log(swap2(input5));

    
    // Cleaner code

    function swap3(str) {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            result += str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase();
        }
        return result;
    }

    console.log(swap3(input5));

// *****************