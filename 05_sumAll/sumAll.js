
// method 1
const sumAll = function (...arg) {
    let number = true;
    arg.forEach(element => {
        if (typeof element !== 'number') {
            number = false;
        }
    });
    let start = arg[0];
    let end = arg[1];

    if (number && start > 0 && end > 0) {
        let sum = 0;
        if (start < end) {
            for (let i = start; i <= end; i++) {
                sum += i;
            }
            return sum;
        } else {
            for (let i = start; i >= end; i--) {
                sum += i;
            }
            return sum;
        }
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
