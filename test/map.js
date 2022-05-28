function h2rgb(initT) {
  const t = initT < 0 ? initT + 1 : initT % 1

  if (t < 1 / 6) {
    return Math.round(t * 1530)
  }
  if (t < 1 / 2) {
    return 255
  }
  if (t < 2 / 3) {
    return Math.round(((2 / 3) - t) * 1530)
  }
  return 0
}

/**
 * HSL to RGB converter with S = 1 and L = 1
 * @param {number} hue Number between 0 and 1
 * @returns {{r: *, b: *, g: *}} Converted to RGB color object
 *
 * @example
 * import mapColor from 'number-to-color/map'
 * const tenthColorOfSixteen = mapColor(10 / 16) // equals {r: 0, g: 64, b: 255}
 */
module.exports = function map(hue) {
  return {
    r: h2rgb(hue + (1 / 3)),
    g: h2rgb(hue),
    b: h2rgb(hue - (1 / 3)),
  }
}
