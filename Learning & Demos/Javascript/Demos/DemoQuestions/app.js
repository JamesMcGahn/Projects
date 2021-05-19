
// traversing the dom


// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         console.log(e.currentTarget.parentElement)
//         e.currentTarget.parentElement.parentElement.classList.toggle('show-text')
//     })
// })

//using selectors inside the element
const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', (e) => {
        questions.forEach(q => q !== question ? q.classList.remove('show-text') : '')
        question.classList.toggle('show-text')
    })
})