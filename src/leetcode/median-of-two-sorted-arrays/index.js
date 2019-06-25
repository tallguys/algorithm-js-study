/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const length = nums1.length + nums2.length

  const medianIndex = length & 1 ? [(length - 1) / 2] : [length / 2, length / 2 - 1]

  let point1 = 0
  let point2 = 0

  let arr = []

  while (point1 < nums1.length && point2 < nums2.length) {
    if (nums1[point1] <= nums2[point2]) {
      arr.push(nums1[point1])
      point1++
    } else {
      arr.push(nums2[point2])
      point2++
    }

    if (arr.length > length / 2) {
      break
    }
  }

  if (point1 >= nums1.length) {
    arr = arr.concat(nums2.splice(point2))
  }

  if (point2 >= nums2.length) {
    arr = arr.concat(nums1.splice(point1))
  }

  const sum = medianIndex.reduce((acc, cur) => {
    return acc + arr[cur]
  }, 0)

  return sum / medianIndex.length
}

module.exports = findMedianSortedArrays
