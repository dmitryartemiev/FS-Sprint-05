"use strict";

let checkDivision = (start = 1, end = 60) => {
  for (let i = start; i <= end; i++) {
    let preResult = []
    let result = [];
    preResult.push(`The number ${i}`);
    if (i % 2 == 0) {
      result.push("is divisible by 2");
    }
    if (i % 3 == 0) {
      result.push("is divisible by 3");
    }
    if (i % 10 == 0) {
      result.push("is divisible by 10");
    }
    if (i % 2 !== 0 && i % 3 !== 0 && i % 10 !== 0) {
      result.push("-");
    }
    result = result.join(", ");
    if (result.includes("-")) {
      result = result.replace(/,/gm, "");
    }
    let afterResult = preResult.concat(result)
    afterResult = afterResult.join(' ')
    console.log(afterResult);
  }
};
module.exports.checkDivision = checkDivision;
