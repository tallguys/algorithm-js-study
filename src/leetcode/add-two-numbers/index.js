'use strict'

/**
 * @typedef {Object} ListNode
 * @property {Number} val
 * @property {ListNode | null} next
 */

function ListNode (val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode(0)
  let p = l1
  let q = l2
  let curr = dummyHead
  let carry = 0
  while (p || q) {
    const x = p ? p.val : 0
    const y = q ? q.val : 0
    const sum = x + y + carry
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    p = p ? p.next : null
    q = q ? q.next : null
  }
  if (carry > 0) {
    curr.next = new ListNode(carry)
  }
  return dummyHead.next
}

const nodeToString = (listNode) => {
  let l = { ...listNode }
  const result = []
  result.push(l.val)
  while (l.next) {
    result.push(l.next.val)
    l = l.next
  }
  return result.join(' -> ')
}

module.exports = {
  addTwoNumbers,

  nodeToString,
  ListNode
}
