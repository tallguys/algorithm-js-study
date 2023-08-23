/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  for (let i = 0, len = nums.length; i < len;) {
    const num = nums[i]
    if (num === val) {
      for (let j = i + 1; j < len; j++) {
        nums[j - 1] = nums[j]
      }
      nums.pop()
      len = nums.length
    } else {
      i++
    }
  }

  return nums.length
}
