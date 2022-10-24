const getTheTitles = function (arr) {
    let bookTitlesArr = [];
    arr.forEach(element => {
        bookTitlesArr.push(element.title);
    });
    return bookTitlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
