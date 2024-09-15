/**
 * This class defines the chicken object which extends Movable object
 */
class Chicken extends MovableObject {
  height = 80;
  width = 50;
  y = 345;
  offset = {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5,
  };
  IMAGES_WALKING;
  IMAGES_DEAD;
  deadAnimationId;

  constructor(images, imagesDead, height, y) {
    super().loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.IMAGES_WALKING = images;
    this.IMAGES_DEAD = imagesDead;
    this.height = height;
    this.y = y;
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 700 + (Math.random() + 0.2) * 1500;
    this.speed = 0.1 + Math.random() * 0.8;
    this.animate();
  }

  /**
   * This function runs all animations that a chicken can do, like walk and dead.
   */
  animate() {
    this.resetDirection();
    setInterval(() => {
      if (!this.isDead()) {
        this.walk();
      } else {
        this.deadAnimation();
        clearInterval(this.deadAnimation());
      }
    }, 80);
  }

  /**
   * This calls the walk animation
   */
  walk() {
    this.animateImages(this.IMAGES_WALKING);
  }

  /**
   * This calls the dead animation.
   */
  deadAnimation() {
    this.speed = 0;
    this.loadImage(this.IMAGES_DEAD[0]);
  }
}
