/**
 * This class defines all movable objects of the game and is extended by drawable object.
 */
class MovableObject extends DrawableObject {
  /**
   * Defining default parameters
   */
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  lastHit = 0;
  world;
  wasHitted = false;

  /**
   * This function animates an array of different images.
   * @param {Array} imagesToAnimate - array of all specific images of an object
   */
  animateImages(imagesToAnimate) {
    let i = 0;
    i = this.currentImage % imagesToAnimate.length;
    let path = imagesToAnimate[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Function which allows an object to move right.
   */
  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  /**
   * Function which allows an object to move left.
   */
  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
  }

  /**
   * This function aplies gravity to an object.
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        if (this.y > 150 && this instanceof Character) {
          this.y = 150
        }
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /**
   * With this function we can check if any object is above ground.
   * @returns boolean
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return this.y < 380;
    } else {
      return this.y < 150;
    }
  }

  /**
   * This function allows an object to jump.
   * @param {number} height - of jump
   */
  jump(height) {
    this.speedY = height;
    audio.jumping.play();
    audio.jumping.volume = soundVolume;
  }

  /**
   * With this function we can detect the collision betwen two objects.
   * @param {object} movableObject 
   * @returns 
   */
  isColliding(movableObject) {
    return (
      this.x + this.width - this.offset.right >= movableObject.x &&
      this.x + this.offset.left <= movableObject.x + movableObject.width &&
      this.y + this.height - this.offset.bottom >= movableObject.y &&
      this.y + this.offset.top <= movableObject.y + movableObject.height
    );
  }

  /**
   * Returns boolean if enemy or character is been hitted.
   */
  hit() {
    if (this instanceof Chicken || this instanceof Endboss) {
      this.enemyHitted();
    } else {
      this.characterHitted();
    }
  }

  /**
   * Behaviour of enemy or endboss when hitted.
   */
  enemyHitted() {
    this.enemyHit();
    if (this instanceof Chicken) {
      audio.chickenDead.volume = soundVolume;
      audio.chickenDead.play();
    } else {
      audio.endbossHitted.volume = soundVolume;
      audio.endbossHitted.play();
    }
  }

  /**
   * Behaviour of character when hitted.
   */
  characterHitted() {
    this.energyBehavior(0.5);
    if (!this.isDead()) {
      audio.hurt.volume = soundVolume;
      audio.hurt.play();
    }
  }

  /**
   * This function changes the energy ammount of enemy or endboss when hitted.
   */
  enemyHit() {
    if (this instanceof Chicken) {
      this.energyBehavior(100);
    } else if (this instanceof Endboss) {
      this.energyBehavior(20);
    }
  }

  /**
   * This function changes the energy of a specific object.
   * @param {number} amount of energy that will be removed
   */
  energyBehavior(amount) {
    this.energy -= amount;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Returns true or false if an object is been hurt.
   * @returns boolean
   */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    timePassed = timePassed / 1000;
    return timePassed < 1;
  }

  /**
   * Returns true or false if an object is dead.
   * @returns boolean
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * This function resets the walking direction, that means walking from right to left.
   */
  resetDirection() {
    setInterval(() => {
      this.moveLeft();
      this.otherDirection = false;
    }, 1000 / 60);
  }
}
