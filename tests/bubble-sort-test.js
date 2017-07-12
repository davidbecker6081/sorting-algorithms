var { expect } = require('chai');
var bubblesSort = require('../scripts/bubble-sort.js');
var generateArray = require('../scripts/generateArray.js')

describe('BubbleSort Fun Time', () => {

  it('should be an array', () => {
    let sortArray = generateArray(10)

    expect(sortArray).to.be.an('array')
  })

  it('should be a function', () => {
    expect(bubblesSort).to.be.function
  })

  it('should only accept arrays', () => {
    expect(bubblesSort('string')).to.equal('string is not an Array!')
    expect(bubblesSort(5)).to.equal('5 is not an Array!')
  })

  it('should have the same elements for unsorted and sorted', () => {
    let sortArray = generateArray(10)
    let sortedArray = sortArray.sort((a, b) => {
      return a - b
    })

    expect(sortedArray).to.include.members(sortArray);
  })

  it('should accept an array of any length', () => {
    let sortArray = generateArray(10)
    let sortedArray = sortArray.sort((a, b) => {
      return a - b
    })

    expect(sortArray).to.be.an('array')
    expect(bubblesSort(sortArray)).to.deep.equal(sortedArray)
  })

  it('should sort an array of numbers', () => {
    let sortArray = generateArray(5)
    let sortedArray = sortArray.sort((a, b) => {
      return a - b
    })

    expect(sortArray).to.be.an('array')
    expect(bubblesSort(sortArray)).to.deep.equal(sortedArray)
  })

  it('should sort an array of letters', () => {
    let sortArray = ['b', 'd', 'a', 'c']
    let sortedArray = sortArray.sort((a, b) => {
      return a - b
    })

    expect(sortArray).to.be.an('array')
    expect(bubblesSort(sortArray)).to.deep.equal(sortedArray)
  })

  it('should sort positive numbers', () => {
    let sortArray = [5, 10, 2, 4, 55, 3]
    let sortedArray = sortArray.sort((a, b) => {
      return a - b
    })

    expect(bubblesSort(sortArray)).to.deep.equal(sortedArray)
  })

  it('should sort negative numbers', () => {
    let sortArray = [-5, -10, -2, -4, -55, -3]
    let sortedArray = sortArray.sort((a, b) => {
      return a - b
    })

    expect(bubblesSort(sortArray)).to.deep.equal(sortedArray)
  })

  it('should sort positive and negative numbers', () => {
    let sortArray = [5, -10, 2, -4, 55, 3]
    let sortedArray = sortArray.sort((a, b) => {
      return a - b
    })

    expect(bubblesSort(sortArray)).to.deep.equal(sortedArray)
  })
})
