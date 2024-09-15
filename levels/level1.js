let level1;

/**
 * Loads the actual game level
 */
function loadLevel() {
level1 = new Level(
  [
    new Chicken(chickenWalk, chickenDead, 80, 345),
    new Chicken(chickenWalk, chickenDead, 80, 345),
    new Chicken(smallChickenWalk, smallChickenDead, 50, 370),
    new Chicken(chickenWalk, chickenDead, 80, 345),
    new Chicken(smallChickenWalk, smallChickenDead, 50, 370),
    new Chicken(chickenWalk, chickenDead, 80, 345),
    new Chicken(chickenWalk, chickenDead, 80, 345),
    new Chicken(smallChickenWalk, smallChickenDead, 50, 370),
    new Chicken(smallChickenWalk, smallChickenDead, 50, 370),
  ],
  new Endboss(),
  [
    new Clouds(0),
    new Clouds(1),
    new Clouds(2),
    new Clouds(3),
    new Clouds(4),
    new Clouds(5),
  ],
  [
    new BackgroundObject("./img/5_background/layers/air.png", -719),
    new BackgroundObject(
      "./img/5_background/layers/3_third_layer/2.png",
      -719
    ),
    new BackgroundObject(
      "./img/5_background/layers/2_second_layer/2.png",
      -719
    ),
    new BackgroundObject(
      "./img/5_background/layers/1_first_layer/2.png",
      -719
    ),
    new BackgroundObject("./img/5_background/layers/air.png", 0),
    new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 0),
    new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 0),
    new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 0),
    new BackgroundObject("./img/5_background/layers/air.png", 719),
    new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", 719),
    new BackgroundObject(
      "./img/5_background/layers/2_second_layer/2.png",
      719
    ),
    new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", 719),
    new BackgroundObject("./img/5_background/layers/air.png", 719 * 2),
    new BackgroundObject(
      "./img/5_background/layers/3_third_layer/1.png",
      719 * 2
    ),
    new BackgroundObject(
      "./img/5_background/layers/2_second_layer/1.png",
      719 * 2
    ),
    new BackgroundObject(
      "./img/5_background/layers/1_first_layer/1.png",
      719 * 2
    ),
    new BackgroundObject("./img/5_background/layers/air.png", 719 * 3),
    new BackgroundObject(
      "./img/5_background/layers/3_third_layer/2.png",
      719 * 3
    ),
    new BackgroundObject(
      "./img/5_background/layers/2_second_layer/2.png",
      719 * 3
    ),
    new BackgroundObject(
      "./img/5_background/layers/1_first_layer/2.png",
      719 * 3
    ),
    new BackgroundObject("./img/5_background/layers/air.png", 719 * 4),
    new BackgroundObject(
      "./img/5_background/layers/3_third_layer/1.png",
      719 * 4
    ),
    new BackgroundObject(
      "./img/5_background/layers/2_second_layer/1.png",
      719 * 4
    ),
    new BackgroundObject(
      "./img/5_background/layers/1_first_layer/1.png",
      719 * 4
    ),
  ],
  [
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
  ],
  [
    new Bottles(0),
    new Bottles(1),
    new Bottles(0),
    new Bottles(0),
    new Bottles(1),
    new Bottles(1),
    new Bottles(0),
    new Bottles(1),
  ],
);
}
