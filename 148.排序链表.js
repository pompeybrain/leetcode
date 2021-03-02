/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {number[]} arr
 * @return {ListNode}
 */
function buildListNode(arr) {
  return arr.length
    ? new ListNode(arr[0], buildListNode(arr.slice(1, arr.length)))
    : null;
}

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
var sortList = function (head) {
  let maxP = null;
  while (maxP !== head) {
    let p = head;
    while (p.next.next && p.next.next !== maxP) {
      if (p.next.val > p.next.next.val) {
        let q = p.next;
        p.next = p.next.next;
        q.next = q.next.next;
        p.next.next = q;
      } else {
        p = p.next;
      }
    }
  }
  return head;
};
// @lc code=end

console.log(JSON.stringify(sortList(buildListNode([4, 2, 1, 3]))));
