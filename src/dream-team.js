const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let codeName = '';
    let strFound = false;
    if (Array.isArray(members)) {
        for (let element of members) {
            if (typeof (element) === 'string') {
                strFound = true;
                let convElement = element.trim().toUpperCase();
                codeName += convElement[0];
            }
        }
    }
    return strFound ? codeName.split('').sort().join('') : false;
}
