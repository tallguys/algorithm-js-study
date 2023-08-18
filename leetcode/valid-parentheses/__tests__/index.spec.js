const isValid = require('../index')

describe('src.leetcode.valid-parentheses.isValid()', () => {
  it('should output true when input ()', () => {
    expect(isValid('()')).toBe(true)
  })

  it('should output true when input ()[]{}', () => {
    expect(isValid('()[]{}')).toBe(true)
  })

  it('should output false when input (]', () => {
    expect(isValid('(]')).toBe(false)
  })

  it('should output false when input ([)]', () => {
    expect(isValid('([)]')).toBe(false)
  })

  it('should output true when input {()}', () => {
    expect(isValid('{()}')).toBe(true)
  })
})
