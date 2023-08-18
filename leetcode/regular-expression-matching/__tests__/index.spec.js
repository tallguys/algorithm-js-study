'use strict'

const isMatch = require('../index')

describe('leetcode.regular-expression-matching', () => {
  it('should output false when input s = "aa" p = "a"', () => {
    const s = 'aa'
    const p = 'a'
    const result = isMatch(s, p)
    expect(result).toBe(false)
  })

  it('should output true when s = "aa" p = "a."', () => {
    const s = 'aa'
    const p = 'a.'
    const result = isMatch(s, p)
    expect(result).toBe(true)
  })

  it('should output true when s = "aa" p = "a*"', () => {
    const s = 'aa'
    const p = 'a*'
    const result = isMatch(s, p)
    expect(result).toBe(true)
  })

  it('should output true when s = "ab" p = ".*"', () => {
    const s = 'ab'
    const p = '.*'
    const result = isMatch(s, p)
    expect(result).toBe(true)
  })

  it('should output true when s = "aab" p = "c*a*b"', () => {
    const s = 'aab'
    const p = 'c*a*b'
    const result = isMatch(s, p)
    expect(result).toBe(true)
  })

  it('should output false when s = "mississippi" p = "mis*is*p*."', () => {
    const s = 'mississippi'
    const p = 'mis*is*p*.'
    const result = isMatch(s, p)
    expect(result).toBe(false)
  })

  it('should output false when s = "abc" p = "a*bc"', () => {
    const s = 'abc'
    const p = 'a*bc'
    const result = isMatch(s, p)
    expect(result).toBe(true)
  })

  it('should output false when s = "ab" p = ".*c"', () => {
    const s = 'ab'
    const p = '.*c'
    const result = isMatch(s, p)
    expect(result).toBe(false)
  })
})
