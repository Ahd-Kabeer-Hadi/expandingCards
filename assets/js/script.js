const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClass();
        card.classList.toggle('active')
    })
})

function removeActiveClass() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}