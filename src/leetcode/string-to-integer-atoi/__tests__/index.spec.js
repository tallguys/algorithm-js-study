'use strict'

const myAtoi = require('../index')

describe('leetcode.string-to-integer-atoi', () => {
  it('should output 42 when input "42"', () => {
    const result = myAtoi('42')
    expect(result).toBe(42)
  })

  it('should output -42 when input "   -42"', () => {
    const result = myAtoi('   -42')
    expect(result).toBe(-42)
  })

  it('should output 4193 when input "4193 with words"', () => {
    const result = myAtoi('4193 with words')
    expect(result).toBe(4193)
  })

  it('should output 0 when input "words and 987"', () => {
    const result = myAtoi('words and 987')
    expect(result).toBe(0)
  })

  it('should output -2147483648 when input "-91283472332"', () => {
    const result = myAtoi('-91283472332')
    expect(result).toBe(-2147483648)
  })

  it('should output 0 when input "+1"', () => {
    const result = myAtoi('+1')
    expect(result).toBe(1)
  })
})
