assert = require('chai').assert;
const LoveRectangle = require("../love_rectangle")

describe("Love Rectangle instantiated with attributes", function() {
  it("has attributes", function() {
    bob = new LoveRectangle(1, 2, 5, 3)

    assert.equal(bob.startX, 1);
    assert.equal(bob.startY, 2);
    assert.equal(bob.width, 5);
    assert.equal(bob.height, 3);
  });
});
