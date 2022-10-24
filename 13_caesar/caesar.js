// const caesar = function (str, shift) {
//     let newArr = [];
//     let lowerCaseRegex = /^[a-z]+$/;
//     let upperCaseRegex = /^[A-Z]+$/;
//     let startUpperCaseCode = 65;
//     let endUpperCaseCode = 90;
//     let startLowerCaseCode = 97;
//     let endLowerCaseCode = 122;
//     let diff = endUpperCaseCode - startUpperCaseCode;
//     // convert string to an array
//     const arrayString = str.split('');
//     arrayString.forEach(element => {
//         if (lowerCaseRegex.test(element)) {
//             let index = element.charCodeAt() + shift;
//             console.log(element.charCodeAt(), index)
//             if (index > endLowerCaseCode) {
//                 index = (index % diff) + startLowerCaseCode;
//                 let newChar = String.fromCharCode(index);
//                 newArr.push(newChar);
//             } else {
//                 let newChar = String.fromCharCode(index);
//                 newArr.push(newChar);

//             }
//         } else if (upperCaseRegex.test(element)) {
//             let index = element.charCodeAt() + shift;
//             console.log(element.charCodeAt(), index)
//             if (index > endUpperCaseCode) {
//                 index = (index % diff) + startUpperCaseCode;
//                 let newChar = String.fromCharCode(index);
//                 newArr.push(newChar);
//             } else {
//                 let newChar = String.fromCharCode(index);
//                 newArr.push(newChar);
//             }
//         } else {
//             // if its a punctuation
//             newArr.push(element);
//         }

//     });
//     let newString = newArr.join('');
//     return newString;
// };

const caesar = function (string, shift) {
    return string
        .split("")
        .map(char => shiftChar(char, shift))
        .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

// this function is just a fancy way of doing % so that it works with negative numbers
// see this link for details:
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            mod(code + shift - codeSet(code), 26) + codeSet(code)
        );
    }
    return char;
};

// Do not edit below this line
module.exports = caesar;
