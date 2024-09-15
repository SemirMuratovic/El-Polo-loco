/**
 * This class defines the different status bars which appears in the game
 */
class StatusBar extends DrawableObject {
  /**
   * Defining the default parameters.
   */
  IMAGES;
  percentage;

  constructor(IMAGES, x, y, height, width, percentage) {
    super();
    this.IMAGES = IMAGES;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.percentage = percentage;
    this.loadImages(this.IMAGES);
    this.setPercentage(percentage);
  }

  /**
   * This function loads specific image depending on the percentage of energy of an object.
   * @param {number} percentage 
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Defining the index of the status bar image that should appear.
   * @returns number
   */
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
