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

    it("returns overlapping when rec2 x < rec1 x && rec2 y > rec1 y", function() {
      const bob = new LoveRectangle(3, 2, 5, 3)
      const sally = new LoveRectangle(2, 4, 4, 6)

      const overlap = GoodLovin.loveOverlap(bob, sally);

      assert.equal(overlap.startX, 3);
      assert.equal(overlap.startY, 4);
      assert.equal(overlap.width, 3);
      assert.equal(overlap.height, 1);
    });

    it("returns no lovin when rec1 yLimit <= rec2 startY", function() {
      const bob = new LoveRectangle(3, 4, 5, 1)
      const sally = new LoveRectangle(2, 6, 4, 1)

      const overlap = GoodLovin.loveOverlap(bob, sally);

      assert.equal(overlap, "No Lovin' :/");
    });

    it("returns no lovin when rec1 yLimit <= rec2 startY OR rec2 yLimit < rec1 startY", function() {
      const bob = new LoveRectangle(3, 4, 5, 1)
      const sally = new LoveRectangle(2, 6, 4, 1)

      const overlap = GoodLovin.loveOverlap(bob, sally);

      assert.equal(overlap, "No Lovin' :/");

      const billy = new LoveRectangle(3, 4, 5, 1)
      const suzie = new LoveRectangle(2, 1, 4, 1)

      const overlap2 = GoodLovin.loveOverlap(billy, suzie);

      assert.equal(overlap2, "No Lovin' :/");
    });

    it("returns no lovin when rec1 xLimit <= rec2 startX OR rec2 xLimit <= rec1 startX", function() {
      const bob = new LoveRectangle(1, 1, 3, 1)
      const sally = new LoveRectangle(5, 1, 4, 1)

      const overlap = GoodLovin.loveOverlap(bob, sally);

      assert.equal(overlap, "No Lovin' :/");

      const billy = new LoveRectangle(5, 1, 5, 1)
      const suzie = new LoveRectangle(1, 1, 4, 1)

      const overlap2 = GoodLovin.loveOverlap(billy, suzie);

      assert.equal(overlap2, "No Lovin' :/");
    });
  })
});
