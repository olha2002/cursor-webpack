const API_PLANETS = "https://swapi.dev/api/planets/";
const planetsButton = document.querySelector(".btn-planets");
const planetsContainer = document.createElement("div");
planetsContainer.className = "container planets-container";
planetsButton.after(planetsContainer);
const previoutButton = document.querySelector(".btn-previous");
const nextButton = document.querySelector(".btn-next");

export {
  API_PLANETS,
  planetsButton,
  planetsContainer,
  previoutButton,
  nextButton,
};
