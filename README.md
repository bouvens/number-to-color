# Number-to-color

Small and fast library for mapping range of numbers to colors. It varies hue (with saturation and lightness equals to 1) and returning RGB in different formats.

```js
import getColor from 'number-to-color'
const tenthColorOfSixteen = getColor(10, 16) // {r: 0, g: 64, b: 255}
```
