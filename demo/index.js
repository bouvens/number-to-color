const getColor = require('../')
const hexColor = require('../hexMap')

const input = document.getElementById('states')
const colorsWrapper = document.getElementById('colors')
let previousStates

function updateColors () {
  const states = input.value.slice(0, 4)
  input.value = states
  if (states === previousStates) {
    return
  }
  previousStates = states

  // slow but easy clear
  colorsWrapper.innerHTML = ''

  for (let state = 0; state <= states; state += 1) {
    const rgbColor = getColor(state, states)
    const nextColor = hexColor(state / states)
    const colorContainer = document.createElement('div')
    colorContainer.setAttribute('class', 'color')
    colorContainer.setAttribute('title', `${nextColor}
${JSON.stringify(rgbColor, null, 1)}`)
    colorContainer.setAttribute('style', `background-color: ${nextColor}`)
    colorContainer.innerText = `${state}`
    colorsWrapper.appendChild(colorContainer)
  }
}

function initialize () {
  input.oninput = updateColors
  updateColors()
}

document.addEventListener('DOMContentLoaded', initialize)
