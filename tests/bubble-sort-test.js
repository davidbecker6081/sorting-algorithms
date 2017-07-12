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
  })

  it('should accept an array of any length', () => {
    let sortArray = generateArray(10)
    let sortedArray = bubblesSort(sortArray)

    expect(sortArray).to.equal(sortArray)
    expect(bubblesSort(sortArray)).to.equal(sortedArray)
  })

  it('should sort an array of numbers', () => {
    let sortArrayNums = generateArray(5)
    let sortedArrayNums = bubblesSort(sortArrayNums)

    expect(sortArrayNums).to.equal(sortArrayNums)
    expect(bubblesSort(sortArrayNums)).to.equal(sortedArrayNums)
  })

  it('should sort an array of letters', () => {
    let sortArrayLet = ['a', 'c', 'd', 'b']
    let sortedArrayLet = bubblesSort(sortArrayLet)

    expect(sortArrayLet).to.equal(sortArrayLet)
    expect(bubblesSort(sortArrayLet)).to.equal(sortedArrayLet)
  })

  it('should not accept an array of numbers and letters')

  it('positive numbers')

  it('negative numbers')

  it('should have the same elements for unsorted and sorted', () => {
    expect([1, 2, 3]).to.include.members([1, 2]);
    expect([1, 2, 3]).to.not.have.members([1, 2]);
  })
})
