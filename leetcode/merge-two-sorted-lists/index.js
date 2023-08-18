/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  if (l1 === null) return l2
  if (l2 === null) return l1

  let l1Next = l1
  let l2Next = l2
  let cur
  if (l1.val <= l2.val) {
    cur = new ListNode(l1.val)
    l1Next = l1.next
  } else {
    cur = new ListNode(l2.val)
    l2Next = l2.next
  }

  let head = cur

  while (l1Next !== null || l2Next !== null) {
    if (l1Next === null) {
      cur.next = new ListNode(l2Next.val)
      l2Next = l2Next.next
    } else if (l2Next === null) {
      cur.next = new ListNode(l1Next.val)
      l1Next = l1Next.next
    } else {
      if (l1Next.val <= l2Next.val) {
        cur.next = new ListNode(l1Next.val)
        l1Next = l1Next.next
      } else {
        cur.next = new ListNode(l2Next.val)
        l2Next = l2Next.next
      }
    }

    cur = cur.next
  }

  return head
}

function ListNode (val) {
  this.val = val
  this.next = null
}

module.exports = {
  mergeTwoLists,
  ListNode
}
