class Node {
  constructor (prev, next, value) {
    this.prev = prev
    this.next = next
    this.value = value
  }
}

function createLink (str) {
  if (str === '') {
    return null
  }

  const charArr = str.split('')

  const link = new Node(null, null, charArr[0])

  const len = charArr.length

  let prev = link
  for (let i = 1; i < len; i++) {
    const node = new Node(prev, null, charArr[i])
    prev.next = node
    prev = node
  }

  return link
}

function isPalindrome (str) {
  const link = createLink(str)

  let fastPointer = link
  let slowPointer = link
  let retroactivePointer = null
  let fastEnd = false

  while (slowPointer && slowPointer.next) {
    if (fastPointer.next === null || fastPointer.next.next === null) {
      if (!fastEnd) {
        fastEnd = true
        retroactivePointer = slowPointer

        if (fastPointer.next !== null && fastPointer.next.next === null) {
          slowPointer = slowPointer.next
        }
      }
    } else {
      fastPointer = fastPointer.next.next
    }

    if (fastEnd) {
      if (retroactivePointer.value !== slowPointer.value) {
        return false
      }

      retroactivePointer = retroactivePointer.prev
      slowPointer = slowPointer.next
    } else {
      slowPointer = slowPointer.next
    }
  }

  return true
}

module.exports = isPalindrome
