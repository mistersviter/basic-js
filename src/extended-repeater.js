const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options.repeatTimes === undefined ? options.repeatTimes = 1 : '';
  options.separator === undefined ? options.separator = '+' : '';
  options.addition === undefined ? options.addition = '' : '';
  options.additionRepeatTimes === undefined ? options.additionRepeatTimes = 1 : '';
  options.additionSeparator === undefined ? options.additionSeparator = '|' : '';
  let repeatedStr = '';
  let repeatedAdd = '';
  let strRepeatCounter = options.repeatTimes;
  let addRepeatCounter = options.additionRepeatTimes;
  while (addRepeatCounter > 0) {
    repeatedAdd += options.addition + ((options.additionRepeatTimes > 1 && addRepeatCounter > 1) ? options.additionSeparator : '');
    addRepeatCounter--;
  }
  while (strRepeatCounter > 0) {
    repeatedStr += str + repeatedAdd + ((options.repeatTimes > 1 && strRepeatCounter > 1) ? options.separator : '');
    strRepeatCounter--;
  }
  return repeatedStr;
};
  