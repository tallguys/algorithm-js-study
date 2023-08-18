/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  function match (temp, result) {
    if (temp.length === 0) {
      return result
    } else if (temp.length === 1) {
      return result + map[temp]
    } else if (temp.length > 1) {
      const first2 = temp.substring(0, 2).split('')
      if (map[first2[0]] < map[first2[1]]) {
        return match(temp.substring(2), result + map[first2[1]] - map[first2[0]])
      } else {
        return match(temp.substring(1), result + map[first2[0]])
      }
    }
  }

  return match(s, 0)
}

module.exports = romanToInt
