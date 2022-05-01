const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chainEl: [],
  
  linkChain() {
    let link ='';
    this.chainEl.forEach(item => {
      link += `( ${item} )~~`
    });
    return link
  },
  
  getLength() {
     return this.chainEl.length;
  },

  addLink(value) {
    if (value===undefined) {
      this.chainEl.push('');
    } else if (value===null) {
      this.chainEl.push('null')
    } else if (value===NaN) {
      this.chainEl.push('NaN')
    } else {
      this.chainEl.push(value.toString())
    };
    return this
  },
    
  removeLink(position) {
    if (
      typeof position == 'number' &&
      position !==0 &&
      this.chainEl[position]) {
      this.chainEl.splice(position-1, 1); 
      return this
    } else {
        this.chainEl = [];
      throw new Error(`You can't remove incorrect link!`);
    };
  },
  
  reverseChain() {
    this.chainEl.reverse();
    return this
  },
  
  finishChain() {
    const chaining = this.linkChain().slice(0, this.linkChain().length -2 );
    this.chainEl = [];
    return chaining;
  }

};


module.exports = {
  chainMaker
};
