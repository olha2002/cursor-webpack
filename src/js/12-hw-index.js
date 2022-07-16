//selectors
const planetsButton = document.querySelector(".btn-planets");
const previoutButton = document.querySelector(".btn-previous");
const nextButton = document.querySelector(".btn-next");

//variables
const BASE_URL = "https://swapi.dev/api/";
let elementIndex = 0;

const planetsContainer = document.createElement("div");
planetsContainer.className = "container planets-container";
planetsButton.after(planetsContainer);

// functions
async function getPlanets(elementIndex) {
  planetsContainer.innerHTML = "";
  const { results: planetsResponse } = await fetch(`${BASE_URL}/planets/`).then(
    (response) => response.json()
  );

  planetsContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="character flip-card planets-container">
        <div class="flip-card-inner">
        <div class="flip-card-front">
        <img src="./img/planets/${planetsResponse[elementIndex].name}.jpg" class="planets-img" alt="Picture no found!">
            <span id="planet-name">${planetsResponse[elementIndex].name}</span>
      </div>
        <div class="flip-card-back">
          <span id="planet-diameter">Diameter: ${planetsResponse[elementIndex].diameter}</span>
          <span id="planet-films">Population: ${planetsResponse[elementIndex].population}</span>
          <span id="planet-climate">Climate: ${planetsResponse[elementIndex].climate}</span>
          <span id="planet-terrain">Terrain: ${planetsResponse[elementIndex].terrain}</span>
      </div>
      </div>
      </div>
      `
  );
}

// logic
planetsButton.addEventListener("click", () => {
  getPlanets(elementIndex);
});
previoutButton.addEventListener("click", () => {
  elementIndex > 0 ? elementIndex-- : (elementIndex = 9);
  getPlanets(elementIndex);
});
nextButton.addEventListener("click", () => {
  elementIndex < 9 ? elementIndex++ : (elementIndex = 0);
  getPlanets(elementIndex);
});
