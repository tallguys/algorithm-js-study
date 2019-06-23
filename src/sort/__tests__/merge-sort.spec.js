
const faker = require('faker')
const mergeSort = require('../merge-sort')

describe('src.sort.mergeSort(array)', () => {
  describe('array is []', () => {
    it('should return []', () => {
      expect(mergeSort([])).toEqual([])
    })
  })

  describe('array is [1]', () => {
    it('should return [1]', () => {
      expect(mergeSort([1])).toEqual([1])
    })
  })

  describe('array is [1, 3, 4, 2, 7, 6, 5, 9, 8]', () => {
    it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
      expect(mergeSort([1, 3, 4, 2, 7, 6, 5, 9, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
  })

  describe('fake array', () => {
    it('should return a same result with Array.sort(fakeArray)', () => {
      const fakeArray = Array.from(new Array(faker.random.number({ min: 50, max: 100 })), x => faker.random.number({ min: 0, max: 1000 }))
      expect(mergeSort(fakeArray)).toEqual(fakeArray.sort((a, b) => a - b))
    })
  })
})
