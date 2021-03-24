/**
 * fast-cards
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FastCards);
  }
}(this, function(expect, FastCards) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FastCards.GameStateMachine();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GameStateMachine', function() {
    it('should create an instance of GameStateMachine', function() {
      // uncomment below and update the code to test GameStateMachine
      //var instane = new FastCards.GameStateMachine();
      //expect(instance).to.be.a(FastCards.GameStateMachine);
    });

    it('should have the property roomName (base name: "room_name")', function() {
      // uncomment below and update the code to test the property roomName
      //var instane = new FastCards.GameStateMachine();
      //expect(instance).to.be();
    });

    it('should have the property blackCards (base name: "black_cards")', function() {
      // uncomment below and update the code to test the property blackCards
      //var instane = new FastCards.GameStateMachine();
      //expect(instance).to.be();
    });

    it('should have the property whiteCards (base name: "white_cards")', function() {
      // uncomment below and update the code to test the property whiteCards
      //var instane = new FastCards.GameStateMachine();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new FastCards.GameStateMachine();
      //expect(instance).to.be();
    });

    it('should have the property roundCount (base name: "round_count")', function() {
      // uncomment below and update the code to test the property roundCount
      //var instane = new FastCards.GameStateMachine();
      //expect(instance).to.be();
    });

    it('should have the property currentlyActiveCard (base name: "currently_active_card")', function() {
      // uncomment below and update the code to test the property currentlyActiveCard
      //var instane = new FastCards.GameStateMachine();
      //expect(instance).to.be();
    });

    it('should have the property playerSubmissions (base name: "player_submissions")', function() {
      // uncomment below and update the code to test the property playerSubmissions
      //var instane = new FastCards.GameStateMachine();
      //expect(instance).to.be();
    });

    it('should have the property playerLookup (base name: "player_lookup")', function() {
      // uncomment below and update the code to test the property playerLookup
      //var instane = new FastCards.GameStateMachine();
      //expect(instance).to.be();
    });

  });

}));
