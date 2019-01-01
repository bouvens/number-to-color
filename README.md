# Number-to-color
[![npm][npm-badge]][npm] [![npm][npm-dt-badge]][npm] [![GitHub issues][issues-badge]][issues]

Small and fast library for mapping range of numbers to a circular palette of colors. It varies hue (with saturation and lightness equals to 1) and returning RGB in different formats.

```javascript
import getColor from 'number-to-color'
// getColor(number from 0 to max - 1, max)
const tenthColorOfSixteen = getColor(10, 16) // equals {r: 0, g: 64, b: 255}
```

## [Demo](https://bouvens.github.io/number-to-color/)
   
You can see a live demo at [https://bouvens.github.io/number-to-color/](https://bouvens.github.io/number-to-color/)
The source code of this demo is available in [the repository](https://github.com/bouvens/number-to-color/tree/master/demo).

## Memoization

Default export in the package calculates all colors for `numbers` and memoizes this values for every `max`. 

## Usage and formats

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

## How to run demo locally

Run in a console:
```bash
git clone git@github.com:bouvens/number-to-color.git
cd number-to-color
yarn
yarn run start
```

Then open [http://localhost:8080/](http://localhost:8080/)

For sure you are able to use `npm` instead of `yarn`.

## References

* See another one example of use in Greffeath Machine cellular automata: [demo](https://bouvens.github.io/griffeath-machine/), [source code](https://github.com/bouvens/griffeath-machine/blob/master/src/components/common/CanvasField.jsx).
* This library is inspired by [Nano ID](https://github.com/ai/nanoid#readme).

[npm-badge]: https://img.shields.io/npm/v/number-to-color.png?style=flat-square
[npm]: https://www.npmjs.org/package/number-to-color

[npm-dt-badge]: https://img.shields.io/npm/dt/number-to-color.png?style=flat-square

[issues-badge]: https://img.shields.io/github/issues/bouvens/number-to-color.svg?style=flat-square
[issues]: https://github.com/bouvens/number-to-color/issues
