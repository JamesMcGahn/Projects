// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')
const videoPreloader = document.querySelector('.preloader')

btn.addEventListener('click', () => {
    btn.classList.toggle('slide') ? video.pause() : video.play()
})

window.addEventListener('load', () => {
    videoPreloader.classList.add('hide-preloader')
})