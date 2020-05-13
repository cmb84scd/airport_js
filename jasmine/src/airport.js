'use strict';

class Airport {
  constructor() {
    this._hangar = []
  }

  planes() {
    return this._hangar;
  };

  clearForLanding(plane) {
    this._hangar.push(plane);
  };

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
