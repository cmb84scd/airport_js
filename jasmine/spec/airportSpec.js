'use strict';

describe('Airport', function() {
  let airport;
  let plane;
  let weather;

  beforeEach(function() {
    plane = jasmine.createSpy('plane' /*, ['land']*/);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    });

    it('can clear planes for landing', function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for takeoff', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('under stormy conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });

    it('does not clear planes for takeoff', function() {
      expect(function(){airport.clearForTakeOff(plane);}).toThrowError('cannot takeoff during storm');
    });

    it('does not clear planes to land', function() {
      expect(function(){airport.clearForLanding(plane);}).toThrowError('cannot land during storm');
    });
  });

  // describe('land a plane', function() {
  //   it('instructs a plane to land', function() {
  //     expect(airport.land(plane)).toEqual(plane);
  //   });
  // });
  //
  // describe('take off', function() {
  //   it('takes off a plane', function() {
  //     expect(airport.takeOff(plane)).not.toEqual(plane);
  //   });
  //   it('returns a message', function() {
  //     expect(airport.takeOff(plane)).toContain(" has taken off");
  //   });
  // });
  //
  // describe('airport full', function() {
  //   it('stops planes from landing when hangar full', function() {
  //     airport.land(plane)
  //     expect(function(){airport.land(plane);}).toThrowError("Airport Full");
  //   });
  // });
});
