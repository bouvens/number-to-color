# JavaScript Number to Color converter
[![npm][npm-badge]][npm] [![npm][npm-dt-badge]][npm] [![GitHub issues][issues-badge]][issues]

<img src="https://raw.githubusercontent.com/bouvens/number-to-color/master/demo/colors-example.png" align="right" alt="An example of number to color conversion" width=168 height=168>

This small and fast library maps a range of numbers to a circular palette of colors. It varies hue (with saturation and lightness equals to 1) and returning RGB in different formats.

```javascript
import getColor from 'number-to-color'
// getColor(number from 0 to max − 1, max)
const tenthColorOfSixteen = getColor(10, 16) // equals {r: 0, g: 64, b: 255}
```

## [Demo](https://bouvens.github.io/number-to-color/)

You can see a live demo at <img src="https://raw.githubusercontent.com/bouvens/number-to-color/master/demo/favicon.png" width=16 height=16> [https://bouvens.github.io/number-to-color/](https://bouvens.github.io/number-to-color/)
The source code of this demo is available in [the repository](https://github.com/bouvens/number-to-color/tree/master/demo).

Example of usage: <img src="https://raw.githubusercontent.com/bouvens/griffeath-machine/4e27f6f5df4c6cc77c96ab2e3545cbdc1da0a433/img/favicon.png" width=16 height=16> [Griffeath's machine](https://bouvens.github.io/griffeath-machine/).

## Memoization

The default export in the package calculates all colors for `numbers` and memoizes these values for every `max`.

## Usage and Formats

Run in a console:
```bash
npm i number-to-color
```

Include and call it in wanted way:
```javascript
// with memoization
import getColor from 'number-to-color'
const tenthColorOfSixteen = getColor(10, 16) // equals {r: 0, g: 64, b: 255}

// without memoization for numbers [0, 1)
import mapColor from 'number-to-color/map'
const tenthColorOfSixteen = mapColor(10 / 16) // equals {r: 0, g: 64, b: 255}

// in hex format for numbers [0, 1)
import hexColor from 'number-to-color/hexMap'
const tenthColorOfSixteen = hexColor(10 / 16) // equals '#0040ff'
```

`hexColor(0) === hexColor(1)`, so don't use both edges in the same time. Thus values of `getColor(0, 16)` equals `getcolor(16, 16)`.

## Sizes

With all dependencies, minified and gzipped:
* `require('number-to-color')` 254 B
* `require('number-to-color/map')` 165 B
* `require('number-to-color/hexMap')` 242 B

## How to Run the Demo Locally

Run in a console:
```bash
git clone git@github.com:bouvens/number-to-color.git
cd number-to-color
npm install
npm run start
```

Then open [http://localhost:8080/](http://localhost:8080/)

## References

* See another one example of use in Greffeath Machine cellular automata: [demo](https://bouvens.github.io/griffeath-machine/), [source code](https://github.com/bouvens/griffeath-machine/blob/master/src/components/common/CanvasField.jsx).
* This library is inspired by [Nano ID](https://github.com/ai/nanoid#readme).

[npm-badge]: https://img.shields.io/npm/v/number-to-color.png?style=flat-square
[npm]: https://www.npmjs.com/package/number-to-color

[npm-dt-badge]: https://img.shields.io/npm/dt/number-to-color.png?style=flat-square

[issues-badge]: https://img.shields.io/github/issues/bouvens/number-to-color.svg?style=flat-square
[issues]: https://github.com/bouvens/number-to-color/issues
