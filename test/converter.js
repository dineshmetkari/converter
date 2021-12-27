var expect = require("chai").expect;
var converter = require("../app/converter");

describe("Color Code Converter", function() {
  describe("RGB to HEX", function(){
    it("converts the basic colors",function(){
      var redHex = converter.rgbToHex(255,0,0);
      var greenHex= converter.rgbToHex(0,255,0);
      var blueHex = converter.rgbToHex(0,0, 255);

      expect(redHex).to.equals("ff0000");
      expect(greenHex).to.equals("00ff00");
      expect(blueHex).to.equals("0000ff");

    });

    });
  describe("HEX to RGB", function() {
    it("conrts the basic colors", function(){
      var redRGB = converter.hexToRGB("ff0000");
      expect(redRGB).to.deep.equals([255,0,0]);
      expect(2*4).to.equal(8);


    });


  });
  // specification code
});

