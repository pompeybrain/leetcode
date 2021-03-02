/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
  while (p && p.next && p.next.next) {
    if (p.next.val === p.next.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return guard.next;
};
// @lc code=end
