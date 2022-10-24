const removeFromArray = function (arr, ...arg) {
    for (let el of arg) {
        arr.forEach(element => {
            if (element === el) {
                let index = arr.indexOf(el);
                arr.splice(index, 1);
            } else {
                return -1;
            }
        });

    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
