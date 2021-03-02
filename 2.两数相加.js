/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p = l1;
  let q = l2;
  let carry = 0;
  let head = new ListNode(null);
  let n = head;
  while (p || q || carry) {
    let sum = carry;
    if (p) {
      sum += p.val;
      p = p.next;
    }
    if (q) {
      sum += q.val;
      q = q.next;
    }
    n.next = new ListNode(sum % 10);
    n = n.next;
    carry = Math.floor(sum / 10);
  }
  return head.next;
};
// @lc code=end

function arrToLink(arr) {
  if (!arr.length) {
    return null;
  }
  let node = new ListNode(arr[0]);
  node.next = arrToLink(arr.slice(1, arr.length));
  return node;
}

/**
 * 遍历链表
 */
function visitLink(link) {
  let p = link;
  while (p !== null) {
    console.log(p.val);
    p = p.next;
  }
}

let l1 = [9, 9, 9, 9, 9, 9, 9];
let l2 = [9, 9, 9, 9];

let link1 = arrToLink(l1);
let link2 = arrToLink(l2);
// console.log(link1);
visitLink(addTwoNumbers(link1, link2));
