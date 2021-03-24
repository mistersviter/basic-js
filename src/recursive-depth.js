const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let maxDepth = 1;
        arr.forEach(element => {
            if (Array.isArray(element)) {
                maxDepth = Math.max(maxDepth, this.calculateDepth(element) + 1)
            }
        });
        return maxDepth;
    }
}