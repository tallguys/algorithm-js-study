'use strict'

describe('leetcode.twoSum()', () => {
  it('should return [0, 1] when input nums = [2, 7, 11, 15], target = 9', () => {
    const twoSum = require('../index')
    const result = twoSum([2, 7, 11, 15], 9)
    expect(result).toEqual([0, 1])
  })

  it('should return [0, 2] when input nums = [2, 11, 7, 15], target = 9', () => {
    const twoSum = require('../index')
    const result = twoSum([2, 11, 7, 15], 9)
    expect(result).toEqual([0, 2])
  })

  it('should return [1, 2] when input nums = [11, 2, 7, 15], target = 9', () => {
    const twoSum = require('../index')
    const result = twoSum([11, 2, 7, 15], 9)
    expect(result).toEqual([1, 2])
  })
})
