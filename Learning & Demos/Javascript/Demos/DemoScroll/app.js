// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    containerHeight === 0 ? linksContainer.style.height = `${linksHeight}px` : linksContainer.style.height = 0
})

// ********** fixed navbar ************
const navbar = document.querySelector('nav')
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', (e) => {
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height
    scrollHeight > navHeight ? navbar.classList.add('fixed-nav') : navbar.classList.remove('fixed-nav')

    scrollHeight > navHeight * 10 ? topLink.classList.add('show-link') : topLink.classList.remove('show-link')

})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)

        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav')
        console.log(fixedNav)
        let postition = element.offsetTop - navHeight;
        if (!fixedNav) {
            postition = postition - navHeight
        }
        if (navHeight > 82) {
            postition = postition + containerHeight
        }

        window.scrollTo({
            left: 0,
            top: postition
        })
        linksContainer.style.height = 0
    })
})