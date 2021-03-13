const jokes = document.querySelector('#jokes');
const jokesBtn = document.querySelector('#newjokenbtn');



const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}



const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get("https://icanhazdadjoke.com", config)
        return res.data.joke;
    } catch (e) {
        return "No Jokes Available. Try Again Later";
    }

}

jokesBtn.addEventListener('click', addNewJoke)