const mapNumToRGB = require('./map')

const DEFAULT_COLOR = { r: 0, g: 0, b: 0 }
const colorMapping = {}

module.exports = function (num, states, defaultColor) {
  if (!states > 0) {
    throw new Error('Pass positive number of states or use \'num2color/map\' for `0 < numbers < 1`')
  } else if (!colorMapping[states]) {
    colorMapping[states] = {}
    const memoized = colorMapping[states]
    for (let i = 0; i < states; i += 1) {
      memoized[i] = mapNumToRGB(i / states)
    }
  }

  return colorMapping[states][num] || defaultColor || DEFAULT_COLOR
}
