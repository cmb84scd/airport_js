class Airport {

  constructor() {
    this.hangar = [];
  }

  land(plane){

    if (this.hangar.length >= 1) {
    //  return ("Airport Full");
      throw new Error("Airport Full")
    }
      this.hangar.push(plane)
      return plane

  }

  takeOff(plane) {
    this.hangar.pop(plane)
    return (plane + " has taken off")
  }

}
