const { ListNode, mergeTwoLists } = require('../index')

describe('leetcode.merge-two-sorted-lists.mergeTwoLists()', () => {
  it('should output 1->1->2->3->4->4 when input 1->2->4, 1->3->4', () => {
    const l1 = new ListNode(1)
    l1.next = new ListNode(2)
    l1.next.next = new ListNode(4)

    const l2 = new ListNode(1)
    l2.next = new ListNode(3)
    l2.next.next = new ListNode(4)

    const l3 = mergeTwoLists(l1, l2)

    expect(l3.val).toBe(1)
    expect(l3.next.val).toBe(1)
    expect(l3.next.next.val).toBe(2)
    expect(l3.next.next.next.val).toBe(3)
    expect(l3.next.next.next.next.val).toBe(4)
    expect(l3.next.next.next.next.next.val).toBe(4)
  })
})
