"use strict";

module.exports = class StrFrequency {
  constructor(str) {
    this.str = str;
    this.value = str.valueOf();
  }
  letterFrequencies() {
    if (this.str) {
      let arr = this.str.split('')
      console.log(arr);
    }
  }
  wordFrequencies() {
      if(this.str){
          console.log(this.value + 'word freq');
      }
  }
  reverseString() {
      if(this.str) {
          console.log(this.value + 'reverse str');
      }
  }
};
