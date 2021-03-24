const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let newArr = arr.slice();
        newArr.map((val, idx, newArr) => {
            if (val === '--discard-next') {
                if (newArr[idx + 1] !== undefined) {
                    newArr.splice(idx, 2, '')
                } else newArr.splice(idx, 1, '');
            }
            if (val === '--discard-prev') {пше
                if (newArr[idx - 1] !== undefined) {
                    newArr.splice(idx -  1, 2, '')
                } else newArr.splice(idx, 1, '');
            }
            if (val === '--double-next') {
                if (newArr[idx + 1] !== undefined) {
                    newArr.splice(idx, 1, newArr[idx + 1])
                } else newArr.splice(idx, 1, '');
            }
            if (val === '--double-prev') {
                if (newArr[idx - 1] !== undefined) {
                    newArr.splice(idx, 1, newArr[idx - 1])
                } else newArr.splice(idx, 1, '');
            }
        });
        newArr = newArr.filter((element) => element !== '');
        return newArr;
    } else throw Error;
}
