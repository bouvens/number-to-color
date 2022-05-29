/* eslint-disable no-console */
const benchmark = require('benchmark')
const { numberToColor } = require('..')
const { numberToColor: numberToColorNew } = require('./for-comparsion')

const colors = 100

const repeatForAllNumbers = (func) => {
  for (let i = 0; i < colors; i++) {
    func(i, colors)
    func(i, colors, true)
  }
}
const suite = new benchmark.Suite()

suite
  .add('new', () => {
    repeatForAllNumbers(numberToColorNew)
  })
  .add('old', () => {
    repeatForAllNumbers(numberToColor)
  })
  .add('newRepeat', () => {
    repeatForAllNumbers(numberToColorNew)
  })
  .add('oldRepeat', () => {
    repeatForAllNumbers(numberToColor)
  })
  .on('cycle', (event) => {
    console.log(`${event.target}`)
  })
  .on('complete', function handleComplete() {
    console.log(`The fastest is ${this.filter('fastest').map('name')}.`)
  })
  .run()
