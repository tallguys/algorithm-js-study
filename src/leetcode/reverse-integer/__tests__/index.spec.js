'use strict'

const reverse = require('../index')

describe('leetcode.reverse-integer', () => {
  it('should output 321 when input 123', () => {
    const result = reverse(321)
    expect(result).toBe(123)
  })

  it('should output -321 when input -123', () => {
    const result = reverse(-321)
    expect(result).toBe(-123)
  })

  it('should output 21 when input 120', () => {
    const result = reverse(120)
    expect(result).toBe(21)
  })
})
