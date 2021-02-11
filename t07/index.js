"use strict";

let getAnonymous = (name, alias, affiliation) => {
  let Anonym = class {
    #private = 'this is private';
    constructor(name, alias, affiliation) {
      this.name = name;
      this.alias = alias;
      this.affiliation = affiliation;
    }
    #privateMethod(){
        return this.#private
    }
    //access only in class
  };
  return new Anonym(name, alias, affiliation);
};

module.exports.getAnonymous = getAnonymous;
