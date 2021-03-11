const container = document.querySelector("#container");


for (let i = 1; i <= 151; i++) {
    const pokeContainer = document.createElement('div');
    pokeContainer.classList.add("pokeBox");
    const createPoke = document.createElement('img');
    const pokeNum = document.createElement('label');
    pokeNum.innerText = `#${i}`;
    createPoke.src = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/${i}.png`;

    container.appendChild(pokeContainer);

    pokeContainer.appendChild(createPoke);
    pokeContainer.appendChild(pokeNum);

}




