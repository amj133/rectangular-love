const LoveRectangle = require('./love_rectangle')

class GoodLovin {

  static loveOverlap(rec1, rec2) {
    if(rec1.yLimit <= rec2.startY) {
      return "No Lovin' :/";
    }
    if(rec2.startX >= rec1.startX && rec2.startY >= rec1.startY) {
      var startX = rec2.startX;
      var startY = rec2.startY;
      var newWidth = rec1.xLimit - rec2.startX;
      var newHeight = rec1.yLimit - rec2.startY;
    }
    if(rec2.startX <= rec1.startX && rec2.startY >= rec1.startY) {
      var startX = rec1.startX;
      var startY = rec2.startY;
      var newWidth = rec2.xLimit - rec1.startX;
      var newHeight = rec1.yLimit - rec2.startY;
    }
    return new LoveRectangle(startX, startY, newWidth, newHeight);
  }

}

module.exports = GoodLovin
