class Airport {

  constructor() {
    this.hangar = [];
  }

  land(plane){
    this.hangar.push(plane)
    return plane
  }

  takeOff(plane) {
    this.hangar.pop(plane)
    return (plane + " has taken off")
  }

}
