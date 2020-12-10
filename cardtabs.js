const pokeTab = document.querySelector('.poke')
const congressTab = document.querySelector('.congress')


const mainFrame = document.querySelector('.mainFrame')

pokeTab.addEventListener('click', () => {
    pokeTab.classList.add("is-active")
    congressTab.classList.remove("is-active")
    mainFrame.src = "./pokemon/index.html"
})
congressTab.addEventListener('click', () => {
    congressTab.classList.add("is-active")
    pokeTab.classList.remove("is-active")
    mainFrame.src = "./congress/index.html"
})
