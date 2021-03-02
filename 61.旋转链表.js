/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  let tail;
  let l = 1;
  let p = head;
  while (p.next) {
    l++;
    p = p.next;
  }
  tail = p;
  tail.next = head;
  let remainder = k % l;
  p = head;
  let i = 1;
  while (p.next) {
    if (i < l - remainder) {
      i++;
      p = p.next;
    } else {
      head = p.next;
      p.next = null;
      break;
    }
  }
  return head;
};
// @lc code=end
