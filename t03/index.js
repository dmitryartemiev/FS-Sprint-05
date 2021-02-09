"use strict";

let firstUpper = (str) => {
  if (str) {
    str = str.toLowerCase();
    str = str.replace(/^\s+|\s+$/g, " ").trim();
    str = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    return str;
  } else {
    return (str = " ");
  }
};

module.exports.firstUpper = firstUpper;
