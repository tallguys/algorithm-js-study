'use strict'

/**
 * @param {string} text
 * @param {string} pattern
 * @return {boolean}
 */
const isMatch = (text, pattern) => {
  if (pattern === '') {
    return text === ''
  }

  const firstMatch = text !== '' && (text[0] === pattern[0] || pattern[0] === '.')

  if (pattern.length >= 2 && pattern[1] === '*') {
    return (isMatch(text, pattern.substring(2)) || (firstMatch && isMatch(text.substring(1), pattern)))
  } else {
    return firstMatch && isMatch(text.substring(1), pattern.substring(1))
  }
}

module.exports = isMatch
