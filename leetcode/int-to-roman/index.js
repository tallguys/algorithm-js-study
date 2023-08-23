const map = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

const nn = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

function delta (num) {
  for (const n of nn) {
    if (num < n) {
      continue
    }

    if (num === n) {
      return { str: map[num], delta: 0 }
    }

    const m = num - n
    return { str: map[n], delta: m }
  }
}

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  let str = ''
  let tmpNum = num
  while (true) {
    const ret = delta(tmpNum)
    str += ret.str
    if (ret.delta === 0) {
      break
    }
    tmpNum = ret.delta
  }

  return str
}
