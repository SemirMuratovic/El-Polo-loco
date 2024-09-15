/**
 * Defines sound volume on start.
 * @type {number}
 */
let soundVolume = 0;

/**
 * Defines an Object with all audio files
 * @type {object}
 */
let audio = {
  jumping: new Audio("./audio/jump.mp3"),
  hurt: new Audio("./audio/hurt.mp3"),
  bottleBreak: new Audio("./audio/bottle_break.mp3"),
  chickenDead: new Audio("./audio/chicken.mp3"),
  endbossHitted: new Audio("./audio/endboss_hit.mp3"),
  throwBottle: new Audio("./audio/throw_bottle.mp3"),
  walking: new Audio("./audio/walk.mp3"),
  coinCollected: new Audio("./audio/coin.mp3"),
  bottleCollected: new Audio("./audio/bottle.mp3"),
  sleeping: new Audio("./audio/snoring.mp3"),
  gameOver: new Audio("./audio/game_over.mp3"),
};
