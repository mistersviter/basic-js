const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrChain: [],
  getLength() {
  return this.arrChain.length;
  },
  addLink(value) {
    String(value) ? this.arrChain.push(`( ${String(value)} )`) : this.arrChain.push(`( )`);
    return this;
  },
  removeLink(position) {
    if (this.arrChain[position - 1] !== undefined) {
      this.arrChain.splice(position - 1, 1);
      return this;
    }
    this.arrChain = [];
    throw Error;
  },
  reverseChain() {
    this.arrChain.reverse();
    return this;
  },
  finishChain() {
    const chain = this.arrChain.join('~~');
    this.arrChain = [];
    return chain;
  }
};

module.exports = chainMaker;
