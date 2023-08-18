const removeDuplicates = require('../index')

describe('leetcode.remove-duplicates-from-sorted-array.removeDuplicates()', () => {
  it('should output 2 when input [1, 1, 2]', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2)
  })

  it('should output 5 when input [0,0,1,1,1,2,2,3,3,4]', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
  })
})
