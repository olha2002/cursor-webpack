import { API_PLANETS, planetsContainer } from "./constants";

export async function getPlanets(elementIndex) {
  planetsContainer.innerHTML = "";
  const { results: planetsResponse } = await fetch(`${API_PLANETS}`).then(
    (response) => response.json()
  );

  planetsContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="character flip-card planets-container">
          <div class="flip-card-inner">
          <div class="flip-card-front">
          <img src="planet-${elementIndex}.jpg" class="planets-img" alt="Picture no found!">
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
