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

module.exports = function (h) {
  return {
    r: normalize(h2rgb(h + (1 / 3))),
    g: normalize(h2rgb(h)),
    b: normalize(h2rgb(h - (1 / 3))),
  }
}
