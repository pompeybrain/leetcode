/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let guard = new ListNode();
  guard.next = head;
  let p = guard;
  while (p.next && p.next.next) {
    let temp = p.next;
    p.next = p.next.next;
    temp.next = p.next.next;
    p.next.next = temp;
    p = p.next.next;
  }
  return guard.next;
};
// @lc code=end
