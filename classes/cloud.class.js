/**
 * This class is defining a cloud object.
 */
class Clouds extends MovableObject {
  /**
   * Defining default parameter
   */
  x = 120;
  y = 20;
  height = 300;
  width = 500;
  CLOUDS = clouds;

  /**
   * Constructor of the object.
   * @param {number} start 
   */
  constructor(start) {
    super().loadImage(this.CLOUDS[start]);
    this.x += start * 520;
    this.animate();
  }

  /**
   * Function which animates the clouds.
   */
  animate() {
    this.moveLeft();
  }
}
