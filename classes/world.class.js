/**
 * Main class that defines the whole world of the game with all objects which appears in it.
 */
class World {
  /**
   * Defining default parameters.
   */
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 120;
  statusBarHealth = new StatusBar(imagesHealth, 40, 0, 50, 170, 100);
  statusBarBottle = new StatusBar(imageBottle, 20, 50, 50, 70, 0);
  statusBarCoin = new StatusBar(imageCoin, 100, 30, 100, 100, 0);
  statusBarEndboss = new StatusBar(imagesEndbossHealth, 510, 5, 50, 170, 100);
  throwableObjects = [];
  animationId;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
  }

  /**
   * This function sets the world in the character object.
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * This function draws all objects on the canvas.
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.font = "30px 'Varela Round'";
    this.ctx.fillStyle = "antiquewhite";
    this.ctx.translate(this.camera_x, 0);
    this.addAllFixedObjectsToMap();
    this.addAllMovableObjectsToMap();
    this.drawStatusBars();
    this.ctx.translate(-this.camera_x, 0);
    // draw() will be called permanently
    let self = this;
    this.animationId = requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * All objects that are not moving in the game will be loaded with this function.
   */
  addAllFixedObjectsToMap() {
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
  }

  /**
   * All objects that are moving in the game will be loaded with this function.
   */
  addAllMovableObjectsToMap() {
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.level.endBoss);
    this.addObjectsToMap(this.throwableObjects);
  }

  /**
   * This function draws the status bars of character and the endboss.
   */
  drawStatusBars() {
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBarHealth);
    this.addToMap(this.statusBarBottle);
    this.ctx.fillText(": " + this.statusBarBottle.percentage, 70, 90);
    this.addToMap(this.statusBarCoin);
    this.ctx.fillText(": " + this.statusBarCoin.percentage, 170, 90);
    if (this.level.endBoss.characterWasSeen) {
      this.addToMap(this.statusBarEndboss);
    }
    this.ctx.translate(this.camera_x, 0);
  }

  /**
   * This function adds multiple objects to the canvas.
   * @param {Array} objects
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * This function adds a single objects to the canvas.
   * @param {object} movableObject
   */
  addToMap(movableObject) {
    if (movableObject.otherDirection) {
      this.flipImage(movableObject);
    }
    movableObject.drawImage(this.ctx);
    if (movableObject.otherDirection) {
      this.flipImageBack(movableObject);
    }
  }

  /**
   * Flip image of an object to the right.
   * @param {object} movableObject
   */
  flipImage(movableObject) {
    this.ctx.save();
    this.ctx.translate(movableObject.width, 0);
    this.ctx.scale(-1, 1);
    movableObject.x = movableObject.x * -1;
  }

  /**
   * Flip image of an object to the left.
   * @param {object} movableObject
   */
  flipImageBack(movableObject) {
    movableObject.x = movableObject.x * -1;
    this.ctx.restore();
  }

  /**
   * This function checks all collisions that apper in the game.
   */
  checkCollisions() {
    this.checkCollisionsForEnemies();
    this.checkCollisionsForEndboss();
    setInterval(() => {
      this.checkThrowObjects();
    }, 200);
    this.collectCoins();
    this.collectBottles();
  }

  /**
   * Check collisions between character and enemy.
   */
  checkCollisionsForEnemies() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (!enemy.isDead() && this.character.isColliding(enemy)) {
          if (this.character.isAboveGround() && !this.character.isHurt() && this.character.speedY < 0) {
            this.enemyHittedBehavior(enemy);
            this.character.jump(25);
          } else {
            this.characterHittedBehavior();
          }
        }
      });
    }, 1000 / 60);
  }

  /**
   * What happens when enemy is hitted.
   * @param {object} enemy
   */
  enemyHittedBehavior(enemy) {
    enemy.hit();
    setTimeout(() => {
      let index = this.level.enemies.indexOf(enemy);
      this.level.enemies.splice(index, 1);
    }, 300);
  }

  /**
   * Check collisions between character and endboss.
   */
  checkCollisionsForEndboss() {
    setInterval(() => {
      if (this.endbossIsNotDeadAndCharacterColides()) {
        this.characterHittedBehavior();
      } else if (this.level.endBoss.isDead()) {
        this.loadEndScreen("win");
      } else if (this.character.isDead()) {
        this.loadEndScreen("lose");
      }
    }, 1000 / 60);
  }

  /**
   * Defining the condition.
   * @returns boolean
   */
  endbossIsNotDeadAndCharacterColides() {
    return (
      !this.level.endBoss.isDead() &&
      this.character.isColliding(this.level.endBoss)
    );
  }

  /**
   * What happens when character is hitted.
   */
  characterHittedBehavior() {
    this.character.hit();
    this.statusBarHealth.setPercentage(this.character.energy);
  }

  /**
   * This loads the endscreen depending on win or lose situation.
   * @param {string} type
   */
  loadEndScreen(type) {
    setTimeout(() => {
      loadEndScreen(type);
    }, 400);
  }

  /**
   * This function checks if character collides coins and collects them.
   */
  collectCoins() {
    setInterval(() => {
      this.level.coins.forEach((coin, index) => {
        if (this.character.isColliding(coin)) {
          audio.coinCollected.volume = soundVolume;
          audio.coinCollected.play();
          this.statusBarCoin.percentage += 1;
          this.level.coins.splice(index, 1);
        }
      });
    }, 200);
  }

  /**
   * This function checks if character collides bottles and collects them.
   */
  collectBottles() {
    setInterval(() => {
      this.level.bottles.forEach((bottle, index) => {
        if (this.character.isColliding(bottle)) {
          audio.bottleCollected.volume = soundVolume;
          audio.bottleCollected.play();
          this.statusBarBottle.percentage += 1;
          this.level.bottles.splice(index, 1);
        }
      });
    }, 200);
  }

  /**
   * This function checks the status of the throwable objects.
   */
  checkThrowObjects() {
    this.throwObject();
    this.throwableObjects.forEach((bottle, i) => {
      if (!bottle.animationIsRunning) {
        this.throwableObjects.splice(i, 1);
        bottle.animationIsRunning == false;
      } else if (bottle.animationIsRunning && !bottle.enemyHitted) {
        this.checkBottleCollisions(bottle, i);
      }
    });
  }

  /**
   * This function allows throwing a throwable object when hitting the right key.
   */
  throwObject() {
    if (this.keyboard.SPACE && this.statusBarBottle.percentage > 0) {
      if (!this.character.otherDirection) {
        this.throwObjectRight();
      } else {
        this.throwObjectleft();
      }
    }
  }

  /**
   * Check if the character is turned right and throws the object in that direction.
   */
  throwObjectRight() {
    let bottle = new ThrowableObject(
      this.character.x + this.character.width - this.character.offset.right,
      this.character.y + this.character.height - this.character.offset.top,
      this.character.otherDirection
    );
    this.throwableObjects.push(bottle);
    this.statusBarBottle.percentage -= 1;
  }

  /**
   * Check if the character is turned left and throws the object in that direction.
   */
  throwObjectleft() {
    let bottle = new ThrowableObject(
      this.character.x,
      this.character.y + this.character.height - this.character.offset.top,
      this.character.otherDirection
    );
    this.throwableObjects.push(bottle);
    this.statusBarBottle.percentage -= 1;
  }

  /**
   * Check the collisions of the throwableobject between enemies or endboss.
   * @param {object} bottle
   * @param {number} i
   */
  checkBottleCollisions(bottle, i) {
    this.level.enemies.forEach((enemy) => {
      if (!enemy.isDead() && bottle.isColliding(enemy)) {
        this.bottleHitsEnemy(bottle, enemy);
      }
    });
    if (bottle.isColliding(this.level.endBoss)) {
      this.bottleHitsBoss(bottle, i);
    }
  }

  /**
   * What will happen when bottle hits an enemy.
   * @param {object} bottle
   * @param {object} enemy
   */
  bottleHitsEnemy(bottle, enemy) {
    bottle.enemyHitted = true;
    bottle.animationIsRunning = false;
    enemy.hit();
    setTimeout(() => {
      let index = this.level.enemies.indexOf(enemy);
      this.level.enemies.splice(index, 1);
    }, 300);
  }

  /**
   * What will happen when bottle hits an endboss.
   * @param {object} bottle
   * @param {number} i
   */
  bottleHitsBoss(bottle, i) {
    this.level.endBoss.hit();
    this.statusBarEndboss.setPercentage(this.level.endBoss.energy);
    bottle.enemyHitted = true;
    bottle.animationIsRunning = false;
    setTimeout(() => {
      this.throwableObjects.splice(i, 1);
    }, 200);
  }
}
