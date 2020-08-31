/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  const map = new Map()

  const result = { ...head }
  let pointer = result
  let index = 0
  while (pointer) {
    map.set(index, pointer)
    pointer = pointer.next
    index++
  }

  const targetIndex = index - n

  if (targetIndex === 0) {
    return result.next
  }

  map.get(targetIndex - 1).next = map.get(targetIndex).next

  return result
}

module.exports = removeNthFromEnd
