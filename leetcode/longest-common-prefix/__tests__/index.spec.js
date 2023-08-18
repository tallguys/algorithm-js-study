const longestCommonPrefix = require('../index')

describe('leetcode.longest-common-prefix.longestCommonPrefix()', () => {
  it('should output "fl" when input ["flower","flow","flight"]', () => {
    const input = ['flower', 'flow', 'flight']
    expect(longestCommonPrefix(input)).toBe('fl')
  })

  it('should output "fl" when input ["dog","racecar","car"]', () => {
    const input = ['dog', 'racecar', 'car']
    expect(longestCommonPrefix(input)).toBe('')
  })
})
