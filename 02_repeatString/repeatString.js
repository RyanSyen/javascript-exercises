const repeatString = function (string, num) {
    // repeats the string a given number of times
    if (num >= 0) {
        let s = '';
        for (let i = 0; i < num; i++) {
            s += string;
        }
        return s;
    } else {
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = repeatString;
