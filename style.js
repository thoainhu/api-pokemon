const API_LINK = "https://pokeapi.co/api/v2/pokemon/";
const listPokemon = document.querySelector(".list");
const namePokemon = document.querySelector(".list .card h2");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

async function getData(url) {
    const promise = await fetch(url);
    const data = await promise.json();
    return data;
}
async function renderData(url) {
    let data = await getData(url);
    console.log(data);
    listPokemon.innerHTML = "";

    for (let element of data.results) {
        let dataID = await getData(element.url);
        listPokemon.innerHTML += `
          <a class="card" href="detail.html?id=${dataID.id}" target="_blank">
        <h2>${element.name}</h2>
        <div class="picture">
          <img src="${dataID.sprites.front_default}" alt="" />
        </div>
      </a>`;
    }
}
renderData(API_LINK);

let page = 0;
next.addEventListener("click", async function () {
    page += 20;
    let nextAPI = `https://pokeapi.co/api/v2/pokemon/?offset=${page}`;
    await renderData(nextAPI);
});
prev.addEventListener("click", async function () {
    if (page > 0) {
        page -= 20;
        let nextAPI = `https://pokeapi.co/api/v2/pokemon/?offset=${page}`;
        await renderData(nextAPI);
    }
});
