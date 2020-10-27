const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members_arr) {
    if (members_arr) {
        if (Array.isArray(members_arr)) {
            let result = members_arr.map(firstElem = (elem) => (typeof elem === 'string') ? elem.replace(/[^A-Za-z]/g, '')[0].toUpperCase() : null).sort().join('');
            return result;
        } else return false;
    } else return false;
};

