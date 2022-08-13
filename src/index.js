import "./styles/normalize.css";
import "./index.css";
import "./styles/09-hw-styles.css";
import "./styles/10-hw-styles.css";
import "./styles/12-hw-styles.css";
import "./styles/13-hw-styles.css";

import "./js/01-hw-index.js";
import "./js/02-hw-index.js";
import "./js/03-hw-index.js";
import "./js/04-hw-index.js";
import "./js/05-hw-index.js";
import "./js/06-hw-index.js";
import "./js/07-hw-index.js";
import "./js/08-hw/js";
import "./js/09-hw-index.js";
import "./js/10-hw-index.js";
import "./js/11-hw-index.js";
import "./js/12-hw/js/12-hw-index";
import "./js/12-hw/js/constants";
import "./js/12-hw/js/functions";
import "./js/13-hw-index.js";

import "../src/audio/1.mp3";
import "../src/audio/2.mp3";
import "../src/audio/3.mp3";
import "../src/audio/4.mp3";
import "../src/audio/5.mp3";
import "../src/audio/6.mp3";
import "../src/audio/7.mp3";
import "../src/audio/8.mp3";
import "../src/audio/9.mp3";

import "./img/planet-0.jpg";
import "./img/planet-1.jpg";
import "./img/planet-2.jpg";
import "./img/planet-3.jpg";
import "./img/planet-4.jpg";
import "./img/planet-5.jpg";
import "./img/planet-6.jpg";
import "./img/planet-7.jpg";
import "./img/planet-8.jpg";
import "./img/planet-9.jpg";

import { checkEvenOrOdd } from "./js/01-hw-index.js";
import { calcSalaryWithNoFee } from "./js/03-hw-index.js";
import { getRandomArray } from "./js/05-hw-index.js";
import { replaceBadWords } from "./js/05-hw-index.js";
import { countPositiveNumbers } from "./js/05-hw-index.js";
import { calculateWordLetters } from "./js/06-hw-index.js";

console.log("Is it Even Int Sum(229): ", checkEvenOrOdd());
console.log("calcSalaryWithNoFee(1000): ", calcSalaryWithNoFee(1000));
console.log("My Random Array: ", getRandomArray(8, 5, 10));
console.log(
  "Replaced Bad words: ",
  replaceBadWords("HolyShitfuckFuckFucking bitch", "bitch")
);
console.log(
  "Positives numbers: ",
  countPositiveNumbers(false, -2, true, -4, -5, 6, -1)
);
console.log("Calculated Word Letters Object: ", calculateWordLetters("test"));
