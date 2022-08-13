import { planetsButton, previoutButton, nextButton } from "./constants.js";
import { getPlanets } from "./functions.js";
export let elementIndex = 0;

// logic
planetsButton.addEventListener("click", () => {
  getPlanets(elementIndex);
  previoutButton.hidden = false;
  nextButton.hidden = false;
});

previoutButton.addEventListener("click", () => {
  elementIndex > 0 ? elementIndex-- : (elementIndex = 9);
  getPlanets(elementIndex);
});
nextButton.addEventListener("click", () => {
  elementIndex < 9 ? elementIndex++ : (elementIndex = 0);
  getPlanets(elementIndex);
});
