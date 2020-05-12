describe('Airport', function() {

  let airport;
  let plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('land a plane', function() {

    it('instructs a plane to land', function() {
      expect(airport.land(plane)).toEqual(plane);
    });

  });

  describe('take off', function() {
    it('takes off a plane', function() {
      expect(airport.takeOff(plane)).not.toEqual(plane);
    });
    it('returns a message', function() {
      expect(airport.takeOff(plane)).toContain(" has taken off");
    });
  });

  describe('airport full', function() {
    it('stops planes from landing when hangar full', function() {
      airport.land(plane)
      //expect(airport.land(plane)).toEqual("Airport Full");
      expect(function(){airport.land(plane);}).toThrowError("Airport Full");
    });


  });

});
