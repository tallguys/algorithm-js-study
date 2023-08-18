/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    if (num >= target) {
      return i
    }
  }
  return nums.length
}

module.export = searchInsert
