'use strict'

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  if (x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) {
    return 0
  }

  const isNegative = x < 0
  let dividend = Math.abs(x)
  let quotient
  let mod
  let result = 0

  while (dividend !== 0) {
    quotient = Math.floor(dividend / 10)

    mod = dividend % 10
    dividend = quotient
    result = result * 10 + mod
  }

  result = isNegative ? result * -1 : result

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) {
    return 0
  }

  return result
}

module.exports = reverse
