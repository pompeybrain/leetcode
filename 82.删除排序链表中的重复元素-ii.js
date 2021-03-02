/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  let guard = new ListNode();
  if (!head || !head.next) return head;
  guard.next = head;
  let p = guard;
  let duplicateNum = null;
  while (p) {
    while (duplicateNum !== null && p.next && p.next.val === duplicateNum) {
      p.next = p.next.next;
    }
    if (p.next && p.next.next && p.next.val === p.next.next.val) {
      duplicateNum = p.next.val;
      p.next = p.next.next.next;
    } else {
      duplicateNum = null;
      p = p.next;
    }
  }
  return guard.next;
};
// @lc code=end
