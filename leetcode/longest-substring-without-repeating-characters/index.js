'use strict'

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const len = s.length
  let ans = 0
  const map = new Map()
  for (let i = 0, j = 0; i < len; i++) {
    const char = s.charAt(i)
    if (map.has(char)) {
      j = Math.max(map.get(char) + 1, j)
    }
    ans = Math.max(i - j + 1, ans)
    map.set(char, i)
  }
  return ans
}

module.exports = lengthOfLongestSubstring
