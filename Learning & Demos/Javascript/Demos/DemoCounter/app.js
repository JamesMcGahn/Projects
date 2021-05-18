let counter = 0;

const value = document.getElementById('value');
const btn = document.querySelectorAll('.btn');



btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnClass = e.currentTarget.classList
        if (btnClass.contains('decrease')) {
            counter--

        } else if (btnClass.contains('increase')) {
            counter++

        } else if (btnClass.contains('reset')) {
            counter = 0

        }
        counter > 0 ? value.style.color = 'green' : value.style.color = 'red'
        value.innerText = counter
    })
})