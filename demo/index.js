const getColor = require('../hexMap')
const getRGB = require('../map')

const input = document.getElementById('states')
const colorsWrapper = document.getElementById('colors')

function updateColors () {
  const states = input.value
  // slow but eazy clear
  colorsWrapper.innerHTML = ''

  for (let state = 0; state < states; state += 1) {
    const h = state / states
    const nextColor = getColor(h)
    const rgbColor = getRGB(h)
    const colorContainer = document.createElement('div')
    colorContainer.setAttribute('class', 'color')
    colorContainer.setAttribute('title', `${nextColor}
${JSON.stringify(rgbColor, null, 1)}`)
    colorContainer.setAttribute('style', `background-color: ${nextColor}`)
    colorContainer.innerText = state
    colorsWrapper.appendChild(colorContainer)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  input.oninput = updateColors
  updateColors()
}, false)
