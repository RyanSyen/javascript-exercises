const fibonacci = function (num) {
    let term = parseInt(num) + 1;
    if (term > 0) {
        let n1 = 0, n2 = 1, nextTerm;
        for (let i = 1; i <= term; i++) {
            if (i == term) {
                return n1;
            } else {
                nextTerm = n1 + n2;
                n1 = n2;
                n2 = nextTerm;
            }

        }
    } else {
        return 'OOPS';
    }

};

// Do not edit below this line
module.exports = fibonacci;
