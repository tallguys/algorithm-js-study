'use strict'

/**
 *
 * @param {Array} nums
 * @param {Number} targer
 * @returns {Array}
 */
const twoSum = (nums, targer) => {
  const map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    const complement = targer - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }

  throw new Error('No two sum solution')
}

module.exports = twoSum
