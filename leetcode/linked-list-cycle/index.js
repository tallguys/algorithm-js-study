/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  if (!head || !head.next) {
    return false
  }

  let fastPointer = head.next.next
  let slowPointer = head.next

  while (fastPointer !== slowPointer) {
    if (!fastPointer || !fastPointer.next) {
      return false
    }
    fastPointer = fastPointer.next.next
    slowPointer = slowPointer.next
  }

  return true
}

module.exports = hasCycle
