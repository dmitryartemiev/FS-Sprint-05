"use strict";

module.exports = class StrFrequency {
  constructor(str) {
    this.str = str;
    this.value = str.valueOf();
  }
  letterFrequencies() {
    if (this.value) {
      let result = {};
      let arr = this.value.split("");
      for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        if (arr[i].match(/^[a-zA-Z]+$/)) {
          for (let j = 0; j < arr.length; j++) {
            if (arr[i].toUpperCase() == arr[j].toUpperCase()) {
              counter++;
            }
          }
          result[arr[i].toUpperCase()] = counter;
        }
      }
      return result;
    } else {
      return "";
    }
  }

  wordFrequencies() {
    if (this.value) {
      let result = {};
      let str = this.value.replace(
        /,|-+|'|!|\?|!|\.|"|`|\(|\)|\\|\[|\]|\*|\&|%|\$|@|\+|<|>|\d+|{|}|;|:/gm,
        ""
      ).replace(/\s+/g, ' ').trim();
      let arr = str.split(" ");

      arr.forEach((element) => {
        let counter = 0;
        arr.forEach((secondElement) => {
          if (element.toUpperCase() == secondElement.toUpperCase()) {
            counter++;
          }
        });
        result[element.toUpperCase()] = counter;
      });
      return result;
    }else{
      return ""
    }
  }

  reverseString() {
    if (this.value) {
      return this.value.split("").reverse().join("");

    }else{
      return ' '
    }
  }
};
