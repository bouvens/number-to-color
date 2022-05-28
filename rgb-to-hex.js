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
 * @param {{ r: number, g: number, b: number }} color RGB color object with parameters from 0 to 255
 * @returns {string} Converted to hex RGB color like '#aaff00'
 *
 * @example
 * const tenthColorOfSixteen = rgbToHex(10 / 16) // equals to '#0040ff'
 */
module.exports.rgbToHex = ({ r, g, b }) => `#${toHex(r)}${toHex(g)}${toHex(b)}`
