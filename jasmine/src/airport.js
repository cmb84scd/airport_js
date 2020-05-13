'use strict';

class Airport {
  constructor() {
    this._hangar = []
  }

  planes() {
    return this._hangar;
  };

  clearForLanding(plane) {
    if(this.isStormy()) {
      throw new Error('cannot land during storm');
    }
    this._hangar.push(plane);
  };

  clearForTakeOff(plane) {
    if(this.isStormy()) {
      throw new Error('cannot takeoff during storm');
    }
    this._hangar = [];
  };

  isStormy() {
    return false;
  }

  //
  // land(plane){
  //
  //   if (this.hangar.length >= 1) {
  //
  //     throw new Error("Airport Full")
  //   }
  //   this.hangar.push(plane)
  //   return plane
  //
  // }
  //
  // takeOff(plane) {
  //   this.hangar.pop(plane)
  //   return (plane + " has taken off")
  // }

};
