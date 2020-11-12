export function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

export function addStarField(element, numStars) {
    element.style.setProperty('background-color', 'black')
    element.style.setProperty('z-index', 100)
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div')
        star.style.setProperty('position', 'absolute')
        star.style.setProperty('width', '2px')
        star.style.setProperty('height', '2px')
        star.style.setProperty('background-color', 'white')
        // star.style.setProperty('z-index', '-1')
        let xy = getRandomPosition()
        star.style.left = `${xy[0]}px`
        star.style.top = `${xy[1]}px `
        element.appendChild(star)
    }
}

export function getRandomPosition() {
    let y = document.body.scrollHeight
    let x = document.body.scrollWidth
    console.log(x, y)
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
}