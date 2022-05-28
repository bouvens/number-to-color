const { numberToColor } = require('..')
const { rgbToHex } = require('../rgb-to-hex')

const HIDDEN_CLASS = 'hidden'

const colorsInput = document.getElementById('colors-number')
const shuffledInput = document.getElementById('shuffled')
const colorsWrapper = document.getElementById('colors')
const shuffledNotice = document.getElementById('shuffled-notice')

function rerender({ colors, shuffled }) {
  colorsWrapper.textContent = ''

  for (let i = 0; i < colors; i++) {
    const rgbColor = numberToColor(i, colors, shuffled)
    const hexColor = rgbToHex(rgbColor)
    const colorContainer = document.createElement('div')
    colorContainer.setAttribute('class', 'color')
    colorContainer.setAttribute('title', `${hexColor}
${JSON.stringify(rgbColor, null, 1)}`)
    colorContainer.setAttribute('style', `background-color: ${hexColor}`)
    colorContainer.innerText = `${i}`
    colorsWrapper.appendChild(colorContainer)
  }
}

function parseColorsNumber(value) {
  return Number(value.slice(0, 3)) || 9
}

function updateColors() {
  const colors = parseColorsNumber(colorsInput.value)
  colorsInput.value = colors
  const shuffled = shuffledInput.checked
  shuffledNotice.classList[shuffled ? 'remove' : 'add'](HIDDEN_CLASS)

  rerender({ colors, shuffled })
}

function initialize() {
  colorsInput.oninput = updateColors
  shuffledInput.onchange = updateColors
  updateColors()
}

document.addEventListener('DOMContentLoaded', initialize)
