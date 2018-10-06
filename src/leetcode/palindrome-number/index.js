'use strict'

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) {
    return false
  }

  const stack = []
  let dividend = x
  let quotient
  let mod
  while (quotient !== 0) {
    quotient = Math.floor(dividend / 10)
    mod = dividend % 10
    dividend = quotient
    stack.push(mod)
  }

  let i = 0; let j = stack.length - 1
  while (i < j) {
    if (stack[i] !== stack[j]) {
      return false
    }

    i++
    j--
  }

  return true
}

module.exports = isPalindrome
