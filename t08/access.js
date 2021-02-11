"use strict";

module.exports = class Access {
    #mark_LXXXV = 'undefined';
  get mark_LXXXV() { return this.#mark_LXXXV}
  set mark_LXXXV(value) {
      if(value == undefined){
          console.log('und');
          return 'undefined'
      }else if(value == null){
          return 'null'
      }else{
          this.#mark_LXXXV = value;
      }
  }
};
