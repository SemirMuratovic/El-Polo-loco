/**
 * This class defines all the enemies, endbosses, clouds, backgrounds, coins, bottles and throwable objects
 * which will be shown in the level that appears.
 */
class Level {
  level_end_x = 2800;

  constructor(enemies, endBoss, clouds, backgrounds, coins, bottles, throwableObjects) {
    this.enemies = enemies;
    this.endBoss = endBoss;
    this.clouds = clouds;
    this.backgroundObjects = backgrounds;
    this.coins = coins;
    this.bottles = bottles;
    this.throwableObjects = throwableObjects;
  }
}
