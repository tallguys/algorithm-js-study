class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  if (head === null) return head
  const stack = []
  let point = head
  while (true) {
    stack.push(point.val)

    if (point.next === null) {
      break
    }

    point = point.next
  }

  let list = new ListNode(null)
  let newPointer = list
  while (stack.length > 0) {
    newPointer.next = new ListNode(stack.pop())
    newPointer = newPointer.next
  }

  return list.next
}

module.exports = reverseList
