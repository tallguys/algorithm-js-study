'use strict'

const { ListNode, nodeToString, addTwoNumbers } = require('../index')

describe('leetcode.add-two-numbers.nodeToString()', () => {
  it('should output 2 -> 4 -> 3 when input [2, 4, 3]', () => {
    const l = new ListNode(2)
    l.next = new ListNode(4)
    l.next.next = new ListNode(3)
    const result = nodeToString(l)
    expect(result).toEqual('2 -> 4 -> 3')
  })

  it('should output 7 -> 0 -> 8 when input [7, 0, 8]', () => {
    const l = new ListNode(7)
    l.next = new ListNode(0)
    l.next.next = new ListNode(8)
    const result = nodeToString(l)
    expect(result).toEqual('7 -> 0 -> 8')
  })
})

describe('leetcode.add-two-numbers.addTwoNumbers()', () => {
  it('should get [7, 0, 8] when input [2, 4, 3], [5, 6, 4]', () => {
    const l1 = new ListNode(2)
    l1.next = new ListNode(4)
    l1.next.next = new ListNode(3)

    const l2 = new ListNode(5)
    l2.next = new ListNode(6)
    l2.next.next = new ListNode(4)

    const result = addTwoNumbers(l1, l2)
    expect(nodeToString(result)).toEqual('7 -> 0 -> 8')
  })

  it('should get [7, 0, 4] when input [2, 4, 3], [5, 6]', () => {
    const l1 = new ListNode(2)
    l1.next = new ListNode(4)
    l1.next.next = new ListNode(3)

    const l2 = new ListNode(5)
    l2.next = new ListNode(6)

    const result = addTwoNumbers(l1, l2)
    expect(nodeToString(result)).toEqual('7 -> 0 -> 4')
  })

  it('should get [5] when input [5], []', () => {
    const l1 = new ListNode(5)
    const l2 = null

    const result = addTwoNumbers(l1, l2)
    expect(nodeToString(result)).toEqual('5')
  })
})
