function h2rgb (initT) {
  const t = initT < 0 ? initT + 1 : initT % 1

  if (t < 1 / 6) {
    return 6 * t
  }
  if (t < 1 / 2) {
    return 1
  }
  if (t < 2 / 3) {
    return ((2 / 3) - t) * 6
  }

  return 0
}

function normalize (num) {
  return Math.round(num * 255)
}

/**
 * HSL to RGB converter with S = 1 and L = 1
 * @param {number} hue Number between 0 and 1
 * @returns {{r: *, b: *, g: *}} Color converted to RGB
 *
 * @example
 * import mapColor from 'number-to-color/map'
 * const tenthColorOfSixteen = mapColor(10 / 16) // equals {r: 0, g: 64, b: 255}
 */
module.exports = function (hue) {
  return {
    r: normalize(h2rgb(hue + (1 / 3))),
    g: normalize(h2rgb(hue)),
    b: normalize(h2rgb(hue - (1 / 3))),
  }
}
