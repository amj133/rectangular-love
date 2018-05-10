assert = require('chai').assert;
const LoveRectangle = require("../love_rectangle")

describe("Love Rectangle instantiated with attributes", function() {
  it("has attributes", function() {
    const bob = new LoveRectangle(2, 1, 4, 3)

    assert.equal(bob.startX, 2);
    assert.equal(bob.startY, 1);
    assert.equal(bob.width, 4);
    assert.equal(bob.height, 3);
    assert.equal(bob.xLimit, 6);
    assert.equal(bob.yLimit, 4);
  });
});
