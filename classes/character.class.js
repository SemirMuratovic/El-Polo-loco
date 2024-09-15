/**
 * This class creates the character object
 */
class Character extends MovableObject {
  x = 120;
  y = 150;
  height = 280;
  width = 150;
  speed = 2;
  offset = {
    top: 140,
    bottom: 0,
    left: 30,
    right: 50,
  };
  IMAGES_WALKING = characterWalking;
  IMAGES_IDLE = characterIdle;
  IMAGES_LONG_IDLE = characterLongIdle;
  IMAGES_JUMP = characterJump;
  IMAGES_HURT = characterHurt;
  IMAGES_DEAD = characterDead;
  lastButtonPressed = new Date().getTime();

  constructor() {
    super().loadImage("./img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_JUMP);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.applyGravity();
    this.animate();
  }

  /**
   * Function to animate all animations of the character, like walking
   * jumping, different states and so on.
   */
  animate() {
    setInterval(() => {
      audio.walking.pause();
      this.keyboardActions();
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);
    this.animateDifferentStates();
    this.idleAnimation();
  }

  /**
   * Here are all keyboard actions defined, like move left, move right and jump.
   */
  keyboardActions() {
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      this.moveRight();
      this.walkSound();
    }
    if (this.world.keyboard.LEFT && this.x > 0) {
      this.moveLeft();
      this.walkSound();
    }
    if (this.world.keyboard.UP && !this.isAboveGround()) {
      this.jump(25);
      this.lastButtonPressed = new Date().getTime();
    }
  }

  /**
   * This function plays walking sound only when character on ground.
   */
  walkSound() {
    this.lastButtonPressed = new Date().getTime();
    if (!this.isAboveGround()) {
      audio.walking.play();
      audio.walking.volume = soundVolume;
    }
  }

  /**
   * Animations for different states, like dead animation, hurt animation, jump animation
   * and walk animation.
   */
  animateDifferentStates() {
    let animateImages = setInterval(() => {
      if (this.isDead()) {
        this.deadAnimation(animateImages);
      } else if (this.isHurt()) {
        this.animateImages(this.IMAGES_HURT);
      } else if (this.isAboveGround()) {
        this.animateImages(this.IMAGES_JUMP);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.animateImages(this.IMAGES_WALKING);
        }
      }
    }, 100);
  }

  /**
   * Dead animation with clear interval on all animations when loaded.
   * @param {number} animateImages 
   */
  deadAnimation(animateImages) {
    this.animateImages(this.IMAGES_DEAD);
    audio.gameOver.volume = soundVolume;
    audio.gameOver.play();
    setTimeout(() => {
      clearInterval(animateImages);
    }, 500);
  }

  /**
   * Here would be animated the state when the character don't do any action.
   */
  idleAnimation() {
    setInterval(() => {
      audio.sleeping.pause();
      if (Object.values(this.world.keyboard).every((val) => val === false)) {
        let timePassed = new Date().getTime() - this.lastButtonPressed;
        timePassed = timePassed / 1000;
        if (timePassed < 10) {
          this.animateImages(this.IMAGES_IDLE);
        } else if (timePassed >= 10 && !this.isDead()) {
          this.animateImages(this.IMAGES_LONG_IDLE);
          audio.sleeping.volume = soundVolume;
          audio.sleeping.play();
        }
      }
    }, 300);
  }
}
