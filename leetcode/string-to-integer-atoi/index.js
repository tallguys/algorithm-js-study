'use strict'

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
  let result = 0

  const regex = /^[ ]*([-+])?([0-9]+)/
  const match = regex.exec(str)
  if (match && match.length > 0) {
    const flag = match[1]
    const number = Number(match[2])
    result = !flag || flag === '+' ? number : number * -1
  }

  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  } else if (result < Math.pow(-2, 31)) {
    return Math.pow(-2, 31)
  }

  return result
}

module.exports = myAtoi
