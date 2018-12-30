const map = require('./map')

function toHex (decimal) {
  let hex = Number(decimal).toString(16)

  if (hex.length < 2) {
    hex = `0${hex}`
  }

  return hex
}

module.exports = function (hue) {
  const { r, g, b } = map(hue)

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
