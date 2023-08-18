'use strict'

const lengthOfLongestSubstring = require('../index')

describe('leetcode.loogest-substring-without-repeating-characters.lengthOfLongestSubstring()', () => {
  it('should return 3 when input abcabcbb', () => {
    const str = 'abcabcbb'
    const result = lengthOfLongestSubstring(str)
    expect(result).toBe(3)
  })

  it('should return 1 when input bbbbb', () => {
    const str = 'bbbbb'
    const result = lengthOfLongestSubstring(str)
    expect(result).toBe(1)
  })

  it('should return 3 when input pwwkew', () => {
    const str = 'pwwkew'
    const result = lengthOfLongestSubstring(str)
    expect(result).toBe(3)
  })

  it('should return 3 when input dvdf', () => {
    const str = 'dvdf'
    const result = lengthOfLongestSubstring(str)
    expect(result).toBe(3)
  })

  it('should return 5 when input tmmzuxt', () => {
    const str = 'tmmzuxt'
    const result = lengthOfLongestSubstring(str)
    expect(result).toBe(5)
  })
})
