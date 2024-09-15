/**
 * This class defines an throwable object.
 */
class ThrowableObject extends MovableObject {
  /**
   * Defining default parameters of the object.
   */
  BOTTLE_ROTATING_IMAGES = bottleRotating;
  BOTTLE_SPLASH_IMAGES = bottleSplash;
  height = 60;
  width = 60;
  throwInterval;
  splash;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };
  enemyHitted = false;
  animationIsRunning = true;
  speedX = 8;

  constructor(x, y, otherDirection) {
    super().loadImage(this.BOTTLE_ROTATING_IMAGES[0]);
    this.loadImages(this.BOTTLE_ROTATING_IMAGES);
    this.loadImages(this.BOTTLE_SPLASH_IMAGES);
    this.x = x;
    this.y = y;
    this.throw(otherDirection);
    this.animate();
  }

  /**
   * This function allows throwing left or right, of the throwable object.
   * @param {boolean} otherDirection 
   */
  throw(otherDirection) {
    this.speedY = 25;
    this.applyGravity();
    audio.throwBottle.volume = soundVolume;
    audio.throwBottle.play();
    if (!otherDirection) {
      this.throwInterval = setInterval(() => {
        this.x += this.speedX;
      }, 40);
    } else {
      this.throwInterval = setInterval(() => {
        this.x -= this.speedX;
      }, 40);
    }
  }

  /**
   * Load the animations of the throwable object.
   */
  animate() {
    this.splash = setInterval(() => {
      if (this.isAboveGround() && this.animationIsRunning) {
        this.animateImages(this.BOTTLE_ROTATING_IMAGES);
      } else if (
        !this.isAboveGround() ||
        (this.enemyHitted && !this.animationIsRunning)
      ) {
        this.splashAnimation();
      }
    }, 100);
  }

  /**
   * Splash animation appears when the throwable object is hitting the ground or an enemy.
   */
  splashAnimation() {
    this.speedY = 0;
    this.animateImages(this.BOTTLE_SPLASH_IMAGES);
    this.clearIntervals();
    audio.bottleBreak.volume = soundVolume;
    audio.bottleBreak.play();
    this.animationIsRunning = false;
  }

  /**
   * This function clears the intervals when the object has splashed.
   */
  clearIntervals() {
    setTimeout(() => {
      clearInterval(this.throwInterval);
      clearInterval(this.splash);
    }, 20);
  }
}
