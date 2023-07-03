const url = new URL(window.location.href);
const id = url.searchParams.get("id");
const typeColors = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};

let pokemonDetail = document.querySelector(".pokemonDetail");
async function getDataID() {
    let link = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const promise = await fetch(`${link}`);
    const data = await promise.json();
    let keyType = data.types[0].type.name;

    pokemonDetail.innerHTML += `
      <div class="item" style="background-color:${typeColors[keyType]}">
      <div class="title">
        <h2 class="name">${data.name}</h2>
        <h4 class="number">${id}</h4>
      </div>
      <div class="white">
        <div class="info">
          <div class="grass" style="background-color:${typeColors[keyType]}">${data.types[0].type.name}</div>
          ${data.types[1] ? `<div class="poison">${data.types[1].type.name}</div>` : ""} 
        </div>
        <h4 class="status" style="color:${typeColors[keyType]}">Base Stats</h4>
        <div class="rate">
          <div class="type">
            <p class="typeName" style="color:${typeColors[keyType]}">HP</p>
            <p class="numberRate">${data.stats[0].base_stat}</p>
            <div class="line">
              <div class="innerLine" style="background-color:${typeColors[keyType]}; width: ${data.stats[0].base_stat}% "></div>
            </div>
          </div>
          <div class="type">
            <p class="typeName" style="color:${typeColors[keyType]}">ATK</p>
            <p class="numberRate">${data.stats[1].base_stat}</p>
            <div class="line">
              <div class="innerLine" style="background-color:${typeColors[keyType]}; width: ${data.stats[1].base_stat}% "></div>
            </div>
          </div>
          <div class="type">
            <p class="typeName" style="color:${typeColors[keyType]}">DEF</p>
            <p class="numberRate">${data.stats[2].base_stat}</p>
            <div class="line">
              <div class="innerLine" style="background-color:${typeColors[keyType]}; width: ${data.stats[2].base_stat}% "></div>
            </div>
          </div>
          <div class="type">
            <p class="typeName" style="color:${typeColors[keyType]}">SATK</p>
            <p class="numberRate">${data.stats[3].base_stat}</p>
            <div class="line">
              <div class="innerLine" style="background-color:${typeColors[keyType]}; width: ${data.stats[3].base_stat}% "></div>
            </div>
          </div>
          <div class="type">
            <p class="typeName" style="color:${typeColors[keyType]}">SDEF</p>
            <p class="numberRate">${data.stats[4].base_stat}</p>
            <div class="line">
              <div class="innerLine" style="background-color:${typeColors[keyType]}; width: ${data.stats[4].base_stat}% "></div>
            </div>
          </div>
          <div class="type">
            <p class="typeName" style="color:${typeColors[keyType]}">SPD</p>
            <p class="numberRate">${data.stats[5].base_stat}</p>
            <div class="line">
              <div class="innerLine" style="background-color:${typeColors[keyType]}; width: ${data.stats[5].base_stat}% "></div>
            </div>
          </div>
        </div>
      </div>
      <div class="itemPicture">
        <img src="${data.sprites.front_default}" alt="" />
      </div>
    </div>`;
}
getDataID();
