/**
 * This class defines the endboss and is extended by movable object class.
 */
class Endboss extends MovableObject {
  /**
   * Defining default parameters.
   */
  y = 70;
  x = 2750;
  speed = 0.2;
  height = 400;
  width = 350;
  characterWasSeen = false;
  offset = {
    top: 55,
    bottom: 5,
    left: 5,
    right: 5,
  };
  IMAGES_WALK = endBossWalk;
  IMAGES_ALERT = endBossAlert;
  IMAGES_ATTACK = endBossAttack;
  IMAGES_HURT = endBossHurt;
  IMAGES_DEAD = endBossDead;

  constructor() {
    super().loadImage("./img/4_enemie_boss_chicken/2_alert/G5.png");
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
  }

  /**
   * This function animates all different states of the endboss.
   */
  animate() {
    setInterval(() => {
      if (world.character.x > 2200 && !this.characterWasSeen) {
        this.characterWasSeen = true;
      } else if (!this.isDead() && this.characterWasSeen && this.x > 2600) {
        this.walkAnimation();
      } else if (this.characterWasSeen && this.x <= 2600 && !this.isHurt()) {
        this.alertAnimation();
      } else if (!this.isDead() && this.isHurt()) {
        this.hurtAnimation();
      } else if (this.isDead()) {
        this.deadAnimation();
      }
    }, 200);
  }

  /**
   * Endboss walk animation.
   */
  walkAnimation() {
    this.resetDirection();
    this.animateImages(this.IMAGES_WALK);
  }

  /**
   * This animation will be called when sees the character.
   */
  alertAnimation() {
    this.speed = 0;
    this.animateImages(this.IMAGES_ALERT);
  }

  /**
   * When the endboss is hurt, then an animation of hurt will be called and after that
   * the attack animation.
   */
  hurtAnimation() {
    this.speed = 0.35;
    setTimeout(() => {
      this.animateImages(this.IMAGES_HURT);
    }, 200);
    this.animateImages(this.IMAGES_ATTACK);
  }

  /**
   * This animation is shown when the endboss is dead.
   */
  deadAnimation() {
    this.y = 100;
    this.animateImages(this.IMAGES_DEAD);
  }
}
