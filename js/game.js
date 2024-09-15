/**
 * Defining start variables and constants.
 */
let canvas;
let world;
let keyboard = new Keyboard();
let backgroundMusic = true;
let sound = false;
const AUDIO = document.querySelector("audio");
const MUSIC_ICON = document.getElementById("music_icon");
const NO_MUSIC_ICON = document.getElementById("no_music_icon");
const SOUND_ICON = document.getElementById("sound_icon");
const NO_SOUND_ICON = document.getElementById("no_sound_icon");

/**
 * This function is initializing the game.
 */
function startGame() {
  loadLevel();
  canvas = document.getElementById("canvas");
  startScreen = document.getElementById("start_screen");
  document.getElementById("mobile_controls").classList.remove("d-none");
  document.getElementById("mobile_controls").classList.add("mobile-controls");
  canvas.style.display = "block";
  startScreen.style.display = "none";
  world = new World(canvas, keyboard);
}

/**
 * Adding eventlistener to detect if an specific keyboard Key is pressed.
 */
window.addEventListener("keydown", (event) => {
  if (event.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (event.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (event.keyCode == 38) {
    keyboard.UP = true;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = true;
  }
});

/**
 * Adding eventlistener to detect if an specific keyboard Key is released.
 */
window.addEventListener("keyup", (event) => {
  if (event.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (event.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (event.keyCode == 38) {
    keyboard.UP = false;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = false;
  }
});

/**
 * The buttons for mobile gaming are checked and executed in keyboard event listener.
 * It reacts to pressing and releasing.
 */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("move_left").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById("move_right").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById("jump").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.UP = true;
  });

  document.getElementById("throw").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById("move_left").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  document.getElementById("move_right").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById("jump").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.UP = false;
  });

  document.getElementById("throw").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });
});

/**
 * Eventlistener on music and sound icon.
 */
window.addEventListener("DOMContentLoaded", () => {
  musicEvent();
  soundEvent();
});

/**
 * Function that gives functionality to music and no music icon.
 */
function musicEvent() {
  MUSIC_ICON.addEventListener("click", () => {
    document.getElementById("no_music_icon").classList.toggle("hide");
    document.getElementById("music_icon").classList.toggle("highlight");
    AUDIO.pause();
  });

  NO_MUSIC_ICON.addEventListener("click", () => {
    document.getElementById("no_music_icon").classList.toggle("hide");
    document.getElementById("music_icon").classList.toggle("highlight");
    AUDIO.volume = 0.03;
    AUDIO.play();
  });
}

/**
 * Function that gives functionality to sound and no music icon.
 */
function soundEvent() {
  SOUND_ICON.addEventListener("click", () => {
    document.getElementById("no_sound_icon").classList.toggle("hide");
    document.getElementById("sound_icon").classList.toggle("highlight");
    soundVolume = 0;
  });

  NO_SOUND_ICON.addEventListener("click", () => {
    document.getElementById("no_sound_icon").classList.toggle("hide");
    document.getElementById("sound_icon").classList.toggle("highlight");
    soundVolume = 0.07;
  });
}

/**
 * Toggling sound icon.
 */
function toggleSoundIcon() {
  document.getElementById("no_sound_icon").classList.toggle("hide");
  document.getElementById("sound_icon").classList.toggle("highlight");
}

/**
 * Opens info screen.
 */
function openInfo() {
  document.getElementById("info_screen").style.display = "flex";
  document.getElementById("background").classList.remove("d-none");
  document.getElementById("info").style.display = "flex";
}

/**
 * Closes info screen.
 */
function closeInfo() {
  document.getElementById("info_screen").style.display = "none";
  document.getElementById("background").classList.add("d-none");
  document.getElementById("info").style.display = "none";
}

/**
 * Closes sub-info screen.
 */
function closeSubInfo() {
  document.getElementById("story").classList.add("d-none");
  document.getElementById("controls_info").classList.add("d-none");
  document.getElementById("rights").classList.add("d-none");
  document.getElementById("main-info").classList.remove("d-none");
}

/**
 * Opens story info screen.
 */
function openStory() {
  document.getElementById("main-info").classList.add("d-none");
  document.getElementById("story").classList.remove("d-none");
  document.getElementById("story").innerHTML = storyTemplate();
}

/**
 * Opens controls info screen.
 */
function openCtrlInfo() {
  document.getElementById("main-info").classList.add("d-none");
  document.getElementById("controls_info").classList.remove("d-none");
  document.getElementById("controls_info").innerHTML = ctrlTemplate();
}

/**
 * Opens rights info screen.
 */
function openRightsInfo() {
  document.getElementById("main-info").classList.add("d-none");
  document.getElementById("rights").classList.remove("d-none");
  document.getElementById("rights").innerHTML = rightsTemplate();
}

/**
 * Loads end screen depending to winned or losed game.
 * @param {string} type
 */
function loadEndScreen(type) {
  if (type == "win") {
    clearAllIntervals();
    document.getElementById("end_screen_image").src =
      "./img/9_intro_outro_screens/game_over/game over!.png";
    document.getElementById("end_screen").classList.remove("d-none");
  } else {
    clearAllIntervals();
    document.getElementById("end_screen_image").src =
      "./img/9_intro_outro_screens/game_over/oh no you lost!.png";
    document.getElementById("end_screen").classList.remove("d-none");
  }
}

/**
 * Clearing all intervals that are used in the game.
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * Reloading start screen after game is over.
 */
function reloadStartScreen() {
  document.getElementById("end_screen").classList.add("d-none");
  document.getElementById("start_screen").style.display = "flex";
  document.getElementById("mobile_controls").classList.add("d-none");
  document
    .getElementById("mobile_controls")
    .classList.remove("mobile-controls");
}

/**
 * Toggles full-screen mode.
 */
function toggleFullScreen() {
  const fullScreenElement = document.getElementById("full_screen");
  if (
    !document.fullscreenElement && // Standard
    !document.mozFullScreenElement && // Firefox
    !document.webkitFullscreenElement && // Chrome, Safari, Opera
    !document.msFullscreenElement
  ) {
    // IE/Edge
    enterFullScreen(fullScreenElement);
  } else {
    exitFullScreen();
  }
}

/**
 * Enters full-screen mode for a specified HTML element.
 * @param {HTMLElement} fullScreenElement - The HTML element to enter full-screen mode for.
 */
function enterFullScreen(fullScreenElement) {
  // Check if the browser supports standard full-screen mode.
  if (fullScreenElement.requestFullscreen) {
    fullScreenElement.requestFullscreen(); // Request full-screen mode.
  }
  // Check if the browser supports Mozilla Firefox-specific full-screen mode.
  else if (fullScreenElement.mozRequestFullScreen) {
    fullScreenElement.mozRequestFullScreen(); // Request full-screen mode in Firefox.
  }
  // Check if the browser supports Google Chrome, Safari, and Opera-specific full-screen mode.
  else if (fullScreenElement.webkitRequestFullscreen) {
    fullScreenElement.webkitRequestFullscreen(); // Request full-screen mode in Chrome, Safari, and Opera.
  }
  // Check if the browser supports Microsoft-specific full-screen mode.
  else if (fullScreenElement.msRequestFullscreen) {
    fullScreenElement.msRequestFullscreen(); // Request full-screen mode in Microsoft Edge and IE.
  }
}

/**
 * Exits full-screen mode.
 */
function exitFullScreen() {
  // Check if the browser supports standard full-screen exit.
  if (document.exitFullscreen) {
    document.exitFullscreen(); // Exit full-screen mode.
  }
  // Check if the browser supports Mozilla Firefox-specific full-screen exit.
  else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen(); // Exit full-screen mode in Firefox.
  }
  // Check if the browser supports Google Chrome, Safari, and Opera-specific full-screen exit.
  else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen(); // Exit full-screen mode in Chrome, Safari, and Opera.
  }
  // Check if the browser supports Microsoft-specific full-screen exit.
  else if (document.msExitFullscreen) {
    document.msExitFullscreen(); // Exit full-screen mode in Microsoft Edge and IE.
  }
}

/**
 * Event listener for changes in device orientation.
 * Displays or hides the hint to rotate overlay based on the orientation.
 * @param {MediaQueryListEvent} e - The event containing the media query match information.
 */
window.matchMedia("(orientation: portrait)").addEventListener("change", (e) => {
  const portrait = e.matches;

  if (portrait) {
    document.getElementById("rotate_screen").style = "display: block";
  } else {
    document.getElementById("rotate_screen").style = "display: none";
  }
});
