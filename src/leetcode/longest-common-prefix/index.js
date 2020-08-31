/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return ''

  let prefix = strs[0]
  for (let i = 1, len = strs.length; i < len; i++) {
    const str = strs[i]
    while (str.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix === '') return ''
    }
  }

  return prefix
}

module.exports = longestCommonPrefix
