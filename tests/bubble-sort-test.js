var { expect } = require('chai');
var BubblesSort = require('../scripts/bubble-sort.js');
var GenerateArray = require('../scripts/generateArray.js')

describe('BubbleSort Fun Time', function() {
  let sortArray;

  beforeEach(function() {
    sortArray = GenerateArray(5)
    console.log(sortArray)
  })

  it('should be an array', function () {
    expect(sortArray).to.be.an('array')
  })

})
