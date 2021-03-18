const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']
    if (date) {
        let time = date.getTime();
        if (time) {
            let monthNumber = date.getMonth();
            return seasons[monthNumber];
        } else throw new Error;
    } else return 'Unable to determine the time of year!'
};
