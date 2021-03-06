import { people } from '../data/people.js'

const mainContent = document.querySelector('#main')

populateDOM(people)

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)

const allButton = document.createElement('button')
allButton.textContent = 'All Characters'
mainHeader.appendChild(allButton)

const maleCharacters = people.filter(person => person.gender === 'male')

const femaleCharacters = people.filter(person => person.gender === 'female')



const otherCharacters = people.filter(person => {
    if (person.gender === 'n/a' ||
        person.gender === 'none' ||
        person.gender === 'hermaphrodite') {
        return person
    }
})


femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

maleButton.addEventListener('click', () => populateDOM(maleCharacters))

otherButton.addEventListener('click', () => populateDOM(otherCharacters))

allButton.addEventListener('click', () => populateDOM(people))

function populateDOM(characters) {
    removeChildren(mainContent)
    characters.forEach(element => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(element.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        charImg.addEventListener('error', () => charImg.hidden = true)
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name
    
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
    
        mainContent.appendChild(charFigure)
    })
}

//let theURL = "https://swapi.co/api/people/1/"

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++

    }
    return url.slice(start, end);
}

function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}