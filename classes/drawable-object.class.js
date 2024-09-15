/**
 * All elements that will be drawed in the game calls this class.
 */
class DrawableObject {
  /**
   * Defining default parameters.
   */
  img;
  height = 150;
  width = 100;
  imageCache = {};
  currentImage = 0;
  energy = 100;

  /**
   * Here will be loadea a single image.
   * @param {string} path - defines the image path of the image that we want to load.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Loading all images which will be needed for any animation.
   * @param {Array} arr - array which contains all the image paths of some object in it.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * Draws an image on the canvas.
   * @param {string} ctx 
   */
  drawImage(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
