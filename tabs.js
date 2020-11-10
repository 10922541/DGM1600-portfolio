const charTab = document.querySelector('.characters')
const filmsTab = document.querySelector('.films')
const shipsTab = document.querySelector('.ships')

const mainFrame = document.querySelector('.mainFrame')

charTab.addEventListener('click', () => {
    charTab.classList.add("is-active")
    filmsTab.classList.remove("is-active")
    shipsTab.classList.remove("is-active")
    mainFrame.src = "./star-wars.api/star-wars-characters/index.html"
})
filmsTab.addEventListener('click', () => {
    filmsTab.classList.add("is-active")
    charTab.classList.remove("is-active")
    shipsTab.classList.remove("is-active")
    mainFrame.src = "./star-wars.api/star-wars-films/index.html"
})
shipsTab.addEventListener('click', () => {
    shipsTab.classList.add("is-active")
    filmsTab.classList.remove("is-active")
    charTab.classList.remove("is-active")
    mainFrame.src = "./star-wars.api/star-wars-starships/index.html"
})