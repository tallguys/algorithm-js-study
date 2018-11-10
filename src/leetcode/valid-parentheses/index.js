/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const stack = []

  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0, len = s.length; i < len; i++) {
    const char = s.charAt(i)
    if (['{', '[', '('].includes(char)) {
      stack.push(char)
    } else {
      if (map[stack.pop()] !== char) return false
    }
  }

  return stack.length === 0
}

module.exports = isValid
