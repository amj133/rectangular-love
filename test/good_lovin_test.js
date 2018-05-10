assert = require('chai').assert;
const LoveRectangle = require("../love_rectangle")
const GoodLovin = require("../good_lovin")

describe("class methods", function() {
  describe("#loveOverlap", function(){
    it("returns overlapping love rectangle", function() {
      const bob = new LoveRectangle(2, 1, 4, 3)
      const sally = new LoveRectangle(4, 2, 5, 5)

      const overlap = GoodLovin.loveOverlap(bob, sally);

      assert.equal(overlap.startX, 4);
      assert.equal(overlap.startY, 2);
      assert.equal(overlap.width, 2);
      assert.equal(overlap.height, 2);
    });
  })
});
