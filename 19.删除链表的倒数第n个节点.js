/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

const { arrToLink, ListNode, visitLink } = require("./link");

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let guard = new ListNode(null);
  guard.next = head;
  let p = guard;
  let i = 0;
  //q 指向倒数n+1
  let q = guard;
  while (p.next) {
    i++;
    p = p.next;
    if (i > n) {
      q = q.next;
    }
  }
  q.next = q.next.next;
  return guard.next;
};
// @lc code=end

// visitLink(removeNthFromEnd(arrToLink([1]), 1));
// visitLink(removeNthFromEnd(arrToLink([1, 2, 3, 4, 5]), 2));
