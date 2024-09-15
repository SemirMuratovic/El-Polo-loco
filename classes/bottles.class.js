/**
 * Defining a class for the Bottles object which is extended by Movable object.
 */
class Bottles extends MovableObject {
  /**
   * Defining the images and default y-coordinate, height and width of the object.
   */
  BOTTLE_ON_GROUND_IMAGES = bottleOnGround;
  y = 370;
  height = 60;
  width = 60;

  /**
   * Constructor for creating the Bottles object.
   * @param {number} i
   */
  constructor(i) {
    super().loadImage(this.BOTTLE_ON_GROUND_IMAGES[i]);
    this.x = 200 + Math.random() * 2200;
  }
}
