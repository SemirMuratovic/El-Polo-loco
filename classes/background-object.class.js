/**
 * Defining a class for the Background object which is extended by Movable object.
 */
class BackgroundObject extends MovableObject {
  /**
   * Default y-coordinate, height and width of the object.
   */
  y = 0;
  height = 480;
  width = 720;

  /**
   * Constructor for creating the Background object.
   * @param {string} imagePath
   * @param {number} x
   */
  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
  }
}
