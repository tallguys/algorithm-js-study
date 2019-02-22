/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  let i = 0

  for (let j = 0; j < nums.length;) {
    if (nums[i] === nums[j]) {
      j++
    } else {
      i++
      nums[i] = nums[j]
    }
  }

  return i + 1
}

module.exports = removeDuplicates
