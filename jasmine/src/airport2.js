class Airport {

  constructor() {
    this.hangar = [];
  }

  land(plane){
    try{
        if(this.hangar.length >= 5)
        throw "Airport Full"
    }
       this.hangar.push(plane)
       return plane
  }

  takeOff(plane) {
    this.hangar.pop(plane)
    return (plane + " has taken off")
  }

}
