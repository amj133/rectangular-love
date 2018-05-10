class LoveRectangle {
  constructor(startX, startY, width, height) {
    this.startX = startX;
    this.startY = startY;
    this.width = width;
    this.height = height;
    this.xLimit = startX + width;
    this.yLimit = startY + height;
  }
}

module.exports = LoveRectangle;
