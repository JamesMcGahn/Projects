const drums = document.querySelectorAll('.drum')

drums.forEach((drum) => {
    drum.addEventListener('click', function () {
        playDrum(this.classList[0])
    })
})
document.addEventListener('keypress', (e) => {
    playDrum(e.key);
})

function playDrum(drum) {
    let sound;
    if (drum === 'w') {
        sound = 'crash'
        buttonAnimation('w')
    } else if (drum === 'a') {
        sound = 'kick-bass'
        buttonAnimation('a')
    } else if (drum === 's') {
        sound = 'snare'
        buttonAnimation('s')
    } else if (drum === 'd') {
        sound = 'tom-1'
        buttonAnimation('d')
    } else if (drum === 'j') {
        sound = 'tom-2'
        buttonAnimation('j')
    } else if (drum === 'k') {
        sound = 'tom-3'
        buttonAnimation('k')
    } else if (drum === 'l') {
        sound = 'tom-4'
        buttonAnimation('l')
    } else return
    const audio = new Audio(`./sounds/${sound}.mp3`)
    audio.play();
}

function buttonAnimation(key) {
    const drumKey = document.querySelector(`.${key}`)
    drumKey.classList.add('pressed')
    setTimeout(() => { drumKey.classList.remove('pressed') }, 250)
}