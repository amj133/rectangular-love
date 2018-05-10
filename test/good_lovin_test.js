assert = require('chai').assert;
const LoveRectangle = require("../love_rectangle")
const GoodLovin = require("../good_lovin")

describe("class methods", function() {
  describe("#loveOverlap", function(){
    it("returns overlapping when rec2 x > rec1 x && rec2 y > rec1 y", function() {
      const bob = new LoveRectangle(2, 1, 4, 3)
      const sally = new LoveRectangle(4, 2, 5, 5)

      const overlap = GoodLovin.loveOverlap(bob, sally);

      assert.equal(overlap.startX, 4);
      assert.equal(overlap.startY, 2);
      assert.equal(overlap.width, 2);
      assert.equal(overlap.height, 2);
    });

    it("returns overlapping when rec2 < rec1 x && rec2 y < rec1 y", function() {
      const bob = new LoveRectangle(3, 2, 5, 3)
      const sally = new LoveRectangle(2, 4, 4, 6)

      const overlap = GoodLovin.loveOverlap(bob, sally);

      assert.equal(overlap.startX, 3);
      assert.equal(overlap.startY, 4);
      assert.equal(overlap.width, 3);
      assert.equal(overlap.height, 1);
    });
  })
});
