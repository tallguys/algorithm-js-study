'use strict'

const isPalindrome = require('../index')

describe('leetcode.palindrome-number', () => {
  it('should output true when input 121', () => {
    const result = isPalindrome(121)
    expect(result).toBe(true)
  })

  it('should output true when input -121', () => {
    const result = isPalindrome(-121)
    expect(result).toBe(false)
  })

  it('should output false when input 10', () => {
    const result = isPalindrome(10)
    expect(result).toBe(false)
  })

  it('should output true when input 1221', () => {
    const result = isPalindrome(1221)
    expect(result).toBe(true)
  })
})
