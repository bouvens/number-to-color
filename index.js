const { mapColor } = require('./map-color')

const DEFAULT_COLOR = { r: 0, g: 0, b: 0 }
const straightColorMapping = []
const shuffledColorMapping = []

/**
 * Shuffle an array with Durstenfeld algorithm
 * @param {array} array Array to shuffle elements
 * @returns {array} Shuffled array
 */
function shuffle(array) {
  const resultArray = [...array]
  for (let i = resultArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [resultArray[i], resultArray[j]] = [resultArray[j], resultArray[i]]
  }
  return resultArray
}

/**
 * Number to color converter with memoization
 * @param {number} number Integer number to convert
 * @param {number} colors Number of options, should be greater than number
 * @param {boolean} [shuffled=false] If true, shuffle memoized colors
 * @param {{r: number, b: number, g: number}} [defaultColor={ r: 0, g: 0, b: 0 }] A color
 * to be returned for incorrect numbers
 * @returns {{r: number, b: number, g: number}} Color which corresponds to the number argument
 *
 * @example
 * const tenthColorOfSixteen = getColor(10, 16) // equals to { r: 0, g: 64, b: 255 }
 */
module.exports.numberToColor = (
  number,
  colors,
  shuffled = false,
  defaultColor = DEFAULT_COLOR,
) => {
  const colorMapping = shuffled ? shuffledColorMapping : straightColorMapping
  if (!colorMapping[colors]) {
    colorMapping[colors] = []
    for (let i = 0; i < colors; i++) {
      colorMapping[colors].push(mapColor(i / colors))
    }
    if (shuffled) {
      colorMapping[colors] = shuffle(colorMapping[colors])
    }
  }

  return colorMapping[colors][number] || defaultColor
}
