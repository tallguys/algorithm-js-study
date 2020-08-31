/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  return nums.reduce((acc, cur, index, arr) => {
    if (index > 0) {
      if (arr[index] !== arr[index - 1]) {
        return acc + 1
      }
    }

    return acc
  }, 1)
}

module.exports = removeDuplicates
