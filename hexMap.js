const map = require('./map')

function convert (decimal) {
  let hex = Number(decimal).toString(16)

  if (hex.length < 2) {
    hex = `0${hex}`
  }

  return hex
}

module.exports = function (number) {
  const { r, g, b } = map(number)

  return `#${convert(r)}${convert(g)}${convert(b)}`
}
