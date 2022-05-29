const oneSixth = 1 / 6
const half = 0.5
const twoThird = 2 / 3
const oneThird = 1 / 3

function h2rgb(initT) {
  const t = initT < 0 ? initT + 1 : initT % 1

  if (t < oneSixth) {
    return Math.round(t * 1530)
  }
  if (t < half) {
    return 255
  }
  if (t < twoThird) {
    return Math.round(((twoThird) - t) * 1530)
  }
  return 0
}

/**
 * HSL to RGB converter with S = 1 and L = 1
 * @param {number} hue Number between 0 and 1
 * @returns {{ r: number, g: number, b: number }} Converted to RGB color object
 * with parameters from 0 to 255
 *
 * @example
 * const tenthColorOfSixteen = mapColor(10 / 16) // equals to { r: 0, g: 64, b: 255 }
 */
module.exports.mapColor = (hue) => ({
  r: h2rgb(hue + oneThird),
  g: h2rgb(hue),
  b: h2rgb(hue - oneThird),
})
