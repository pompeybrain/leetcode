/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
const { arrToLink, ListNode, visitLink } = require("./link.js");
// @lc code=start
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
var mergeTwoLists = function (l1, l2) {
  let guard = new ListNode(null);
  let p = guard;
  while (l1 && l2) {
    let nextNode;
    if (l1.val > l2.val) {
      nextNode = l2;
      l2 = l2.next;
    } else {
      nextNode = l1;
      l1 = l1.next;
    }
    p.next = nextNode;
    p = p.next;
  }
  if (l1) p.next = l1;
  if (l2) p.next = l2;
  return guard.next;
};

// @lc code=end
visitLink(mergeTwoLists(arrToLink([1, 4, 5]), arrToLink([1, 3, 4])));
