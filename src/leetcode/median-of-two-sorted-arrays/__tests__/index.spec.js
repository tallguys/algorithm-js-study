const findMedianSortedArrays = require('../index')

describe('src.leetcode.median-of-two-sorted-arrays.findMedianSortedArrays(nums1, nums2)', () => {
  describe('nums1 = [1, 3], nums2 = [2]', () => {
    it('should return 2.0', () => {
      expect(findMedianSortedArrays([1, 3], [2])).toEqual(2)
    })
  })

  describe('nums1 = [1, 2], nums2 = [3, 4]', () => {
    it('should return 2.5', () => {
      expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5)
    })
  })

  describe('nums1 = [2], nums2 = []', () => {
    it('should return 2.5', () => {
      expect(findMedianSortedArrays([2], [])).toEqual(2)
    })
  })

  describe('nums1 = [0], nums2 = [2]', () => {
    it('should return 2.5', () => {
      expect(findMedianSortedArrays([], [2])).toEqual(2)
    })
  })

  describe('nums1 = [10001], nums2 = [10000]', () => {
    it('should return 2.5', () => {
      expect(findMedianSortedArrays([10001], [10000])).toEqual(10000.5)
    })
  })
})
