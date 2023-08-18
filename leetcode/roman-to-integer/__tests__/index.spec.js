const romanToInt = require('../index')

describe('leetcode.roman-to-integer.romanToInt()', () => {
  it('should output 3 when input III', () => {
    expect(romanToInt('III')).toBe(3)
  })

  it('should output 4 when input IV', () => {
    expect(romanToInt('IV')).toBe(4)
  })

  it('should output 9 when input IX', () => {
    expect(romanToInt('IX')).toBe(9)
  })

  it('should output 58 when input LVIII', () => {
    expect(romanToInt('LVIII')).toBe(58)
  })

  it('should output 1994 when input MCMXCIV', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994)
  })
})
