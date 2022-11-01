//https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let currentNode = new ListNode(0)
  let headNode = currentNode

  let extra = 0

  while (l1 || l2 || extra) {
    let sum = extra

    if (l1) {
      sum = sum + l1.val
      l1 = l1.next
    }

    if (l2) {
      sum = sum + l2.val
      l2 = l2.next
    }

    extra = Math.floor(sum / 10)

    currentNode.next = new ListNode(sum % 10)
    currentNode = currentNode.next
  }

  return headNode.next
}

/**
 * Test
 */

// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

// const l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
// const l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };

// addTwoNumbers(l1, l2)
