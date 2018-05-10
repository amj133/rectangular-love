const LoveRectangle = require('./love_rectangle')

class GoodLovin {
  static loveOverlap(rec1, rec2) {
    const startX = rec2.startX;
    const startY = rec2.startY;
    const newWidth = rec1.xLimit - rec2.startX;
    const newHeight = rec1.yLimit - rec2.startY;
    return new LoveRectangle(startX, startY, newWidth, newHeight);
  }
}

module.exports = GoodLovin
