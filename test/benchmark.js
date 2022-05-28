/* eslint-disable no-console */
const benchmark = require('benchmark')
const getColor = require('../index')
const getColorNew = require('./getColor')

const states = 100

const repeatForAllNumbers = (func) => {
  for (let i = 0; i < states; i += 1) {
    func(i, states)
  }
}
const suite = new benchmark.Suite()

suite
  .add('new', () => {
    repeatForAllNumbers(getColorNew)
  })
  .add('old', () => {
    repeatForAllNumbers(getColor)
  })
  .add('repeat new', () => {
    repeatForAllNumbers(getColorNew)
  })
  .add('repeat old', () => {
    repeatForAllNumbers(getColor)
  })
  .on('cycle', (event) => {
    console.log(`${event.target}`)
  })
  .on('complete', function handleComplete() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run()
