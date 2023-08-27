function duplicated (results, target) {
  for (const result of results) {
    if (target[0] === result[0] && target[1] === result[1] && target[2] === result[2]) {
      return true
    }
  }

  return false
}

function twoSum (nums, sum) {
  const results = []

  for (let i = 0, len = nums.length; i < len; i++) {
    const search = sum - nums[i]

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    for (let j = i + 1; j < len; j++) {
      if (nums[j] === search) {
        results.push([nums[i], nums[j]])
      }
    }
  }

  return results
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const results = []

  nums.sort()

  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) {
      break
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    const tmpResults = twoSum(nums.slice(i + 1, len), -nums[i])

    for (const tmpResult of tmpResults) {
      const result = [nums[i], ...tmpResult]
      if (!duplicated(results, result)) {
        results.push(result)
      }
    }
  }

  return results
}
