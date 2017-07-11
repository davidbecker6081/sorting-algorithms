var { expect } = require('chai');
var bubblesSort = require('../scripts/bubble-sort.js');
var generateArray = require('../scripts/generateArray.js')

describe('BubbleSort Fun Time', function() {
  let sortArray;

  beforeEach(function() {
    sortArray = generateArray(10)
  })

  it('should be an array', function () {
    expect(sortArray).to.be.an('array')
  })

  it('should be a function', function() {
    expect(bubblesSort).to.be.function
  })
})
