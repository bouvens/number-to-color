const mapColor = require('./map')

/**
 * Decimal to two-digit hex number converter
 * @param {number} decimal Number to convert
 * @returns {string} Two-digit hex number
 */
const toHex = (decimal) => decimal
  .toString(16)
  .padStart(2, '0')

/**
 * HSL to hex RGB converter with S = 1 and L = 1
 * @param {number} hue Number between 0 and 1
 * @returns {string} Converted to hex RGB color like #aaff00
 *
 * @example
 * import hexColor from 'number-to-color/hexMap'
 * const tenthColorOfSixteen = hexColor(10 / 16) // equals '#0040ff'
 */
module.exports = function hexMap(hue) {
  const { r, g, b } = mapColor(hue)

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
