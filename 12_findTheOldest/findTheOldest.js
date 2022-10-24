// ## Hints
// - You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// - this can be done with a couple of chained array methods, or by using `reduce`.
// - One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.

const findTheOldest = function (arr) {
    const now = new Date()
    let age = 0;
    let user;
    arr.forEach(element => {
        let birthYear = element.yearOfBirth;
        let deathYear = element.yearOfDeath;
        if (element.yearOfDeath == undefined) {
            deathYear = now.getFullYear();
        }
        let userAge = deathYear - birthYear;
        if (age < userAge) {
            age = userAge;
            user = element;
        }
    });
    return user;
};

// Do not edit below this line
module.exports = findTheOldest;
