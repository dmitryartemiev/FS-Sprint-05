"use strict";
const Building = require("./building");

module.exports = class Tower extends Building {
  constructor(hasElevator, arcCapacity, height) {
    super(...arguments);
    this.hasElevator = hasElevator;
    this.arcCapacity = arcCapacity;
    this.height = height;
  }
  get hasElevator() {
    return this._hasElevator;
  }
  set hasElevator(value) {
    if (value === true) {
      return (this.elevator = `+`);
    } else {
      return (this.elevator = `-`);
    }
  }
  getFloorHeight() {
    return this.height / this.floors;
  }
  toString() {
    return [
      `Floors: ${this.floors}`,
      `Material: ${this.material}`,
      `Address: ${this.address}`,
      `Elevator: ${this.elevator}`,
      `Arc reactor capacity: ${this.arcCapacity}`,
      `Height: ${this.height}`,
      `Floor height: ${this.getFloorHeight()}`,
    ].join("\n");
  }
};
