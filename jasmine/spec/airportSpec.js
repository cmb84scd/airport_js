describe('Airport', function() {

  let airport;
  let plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('land a plane', function(){

    it('instructs a plane to land', function() {
      expect(airport.land(plane)).toEqual(plane);
    });

  });

});
