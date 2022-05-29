# JavaScript Number to Color converter

[![npm][npm-badge]][npm] [![npm][npm-dt-badge]][npm] [![GitHub issues][issues-badge]][issues]

<img src="https://raw.githubusercontent.com/bouvens/number-to-color/master/demo/colors-example.png" align="right" alt="An example of number to color conversion" width=168 height=168>

This small and fast library maps a range of numbers to a circular palette of colors. It varies hue (with
saturation and lightness equal to 1) and returns RGB in different formats.

```javascript
import { numberToColor } from 'number-to-color'
// numberToColor(number from 0 to max − 1, max)
const tenthColorOfSixteen = numberToColor(10, 16) // equals to { r: 0, g: 64, b: 255 }
```

## [Demo](https://bouvens.github.io/number-to-color)

You can see a live demo
at <img src="https://raw.githubusercontent.com/bouvens/number-to-color/master/demo/favicon.png" width=16 height=16> [https://bouvens.github.io/number-to-color](https://bouvens.github.io/number-to-color).
The source code of the demo is also [available](https://github.com/bouvens/number-to-color/tree/master/demo).

An example of
usage is <img src="https://raw.githubusercontent.com/bouvens/griffeath-machine/4e27f6f5df4c6cc77c96ab2e3545cbdc1da0a433/img/favicon.png" width=16 height=16> [Griffeath's machine](https://bouvens.github.io/griffeath-machine).

## Usage and Formats

Run in a console:

```bash
npm i number-to-color
```

Include and call it in a wanted way:

```javascript
// with memoization
import { numberToColor } from 'number-to-color'

const tenthColorOfSixteen = numberToColor(10, 16) // equals to { r: 0, g: 64, b: 255 }
```

```javascript
// without memoization for numbers [0, 1)
import { mapColor } from 'number-to-color/map-color'

const tenthColorOfSixteen = mapColor(10 / 16) // equals to { r: 0, g: 64, b: 255 }
```

```javascript
// convert a color you got to hex format
import { rgbToHex } from 'number-to-color/rgbToHex'

const tenthColorOfSixteen = rgbToHex({ r: 0, g: 64, b: 255 }) // equals to '#0040ff'
```

### numberToColor

`numberToColor(number, colors, shuffled, defaultColor)`

The function calculates a color for every `number` and
memoizes these values for each quantity of `colors` it was called with. `number` should be equal to or greater
than `0`
but less than `colors`.

**Arguments**

| Name         | Type                                 | Default              | Description                                  |
|--------------|--------------------------------------|----------------------|----------------------------------------------|
| number       | Number                               |                      | An integer number to convert                 |
| colors       | Number                               |                      | Number of colors, `colors > number`          |
| shuffled     | Boolean                              | false                | If true, shuffle memoized colors             |
| defaultColor | { r: Number, g: Number , b: Number } | { r: 0, g: 0, b: 0 } | A color to be returned for incorrect numbers |

**Returns**

`{ r: Number, g: Number, b: Number }`

It's a color that corresponds to the number argument (`0 <= r, g, b <= 255`).

## Sizes

With all dependencies, minified and gzipped:

* `require('number-to-color')` 358 B
* `require('number-to-color/map-color')` 172 B
* `require('number-to-color/rgbToHex')` 131 B

## How to Run the Demo Locally

Run in a console:

```bash
git clone git@github.com:bouvens/number-to-color.git
cd number-to-color
npm install
npm run start
```

Then open [http://localhost:8080](http://localhost:8080) in a browser.

## References

* Check out an example of usage in Greffeath Machine cellular
  automata: [demo](https://bouvens.github.io/griffeath-machine), [source code](https://github.com/bouvens/griffeath-machine/blob/master/src/components/common/CanvasField.jsx).
* This library is inspired by [Nano ID](https://github.com/ai/nanoid#readme).

[npm-badge]: https://img.shields.io/npm/v/number-to-color.png?style=flat-square

[npm]: https://www.npmjs.com/package/number-to-color

[npm-dt-badge]: https://img.shields.io/npm/dt/number-to-color.png?style=flat-square

[issues-badge]: https://img.shields.io/github/issues/bouvens/number-to-color.svg?style=flat-square

[issues]: https://github.com/bouvens/number-to-color/issues
