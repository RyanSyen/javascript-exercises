const reverseString = function (string) {
    let split = string.split('');
    let reversedString = split.reverse();
    let s = '';
    for (let i = 0; i < reversedString.length; i++) {
        s += reversedString[i];
    }
    return s;
};

// Do not edit below this line
module.exports = reverseString;
