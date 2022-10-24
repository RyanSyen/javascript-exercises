const palindromes = function (string) {
    // format string to all lowercase to make it all the same
    const lowerCase = string.toLowerCase();
    // remove punctuation
    const arrayString = lowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");
    // convert string to an array
    const arrayValues = arrayString.split('');
    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();
    // convert array to string
    const reverseString = reverseArrayValues.join('');
    if (arrayString == reverseString) {
        return true;
    } else {
        return false;
    }

};


// Do not edit below this line
module.exports = palindromes;
