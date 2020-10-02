const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    if (arr) {
        let result = 0;
        for (let subArr of arr) {
            for (let elem of subArr) {
                if (elem === "^^") {
                    result += 1;
                }
            }
        }
        return result;
    }
};
