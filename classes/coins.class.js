/**
 * Class to define a coin object which extends movable object.
 */
class Coins extends MovableObject {
  /**
   * Defining the default parameters.
   */
  img = coin[0];
  COIN_IMAGES = coin;
  y = 160;
  height = 100;

  /**
   * Constructor function for the object.
   */
  constructor() {
    super().loadImage(this.img);
    this.loadImages(this.COIN_IMAGES);
    this.x = 700 + Math.random() * 2000;
    this.animate();
  }

  /**
   * This function animates the coin.
   */
  animate() {
    setInterval(() => {
        this.animateImages(this.COIN_IMAGES)
    }, 300);
  }
}
