# Number-to-color

Small and fast library for mapping range of numbers to colors. It varies hue (with saturation and lightness equals to 1) and returning RGB in different formats.

```js
import getColor from 'number-to-color'
// getColor(number from 0 to max - 1, max)
const eleventhColorOfSixteen = getColor(10, 16) // equals {r: 0, g: 64, b: 255}
// this color is 11th because of first color is 0
```

## Memoization

Default export in the package calculates all colors for `numbers` and memoizes this values for every `max`. 

## Usage and formats

Run in console:
```sh
npm i number-to-color
```

Include and call it in wanted way:
```JS
// with memoization
import getColor from 'number-to-color'
const eleventhColorOfSixteen = getColor(10, 16) // equals {r: 0, g: 64, b: 255}

// without memoization for numbers [0, 1)
import mapColor from 'number-to-color/map'
const eleventhColorOfSixteen = mapColor(10 / 16) // equals {r: 0, g: 64, b: 255}

// in hex format for numbers [0, 1)
import hexColor from 'number-to-color/hexMap'
const eleventhColorOfSixteen = hexColor(10 / 16) // equals '#0040ff'
```

`hexColor(0) === hexColor(1)`, so don't use both edges in the same time.

## References

* This library is inspired by [Nano ID](https://github.com/ai/nanoid#readme).
