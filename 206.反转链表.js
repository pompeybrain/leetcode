/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  // 迭代解法：反转链表要使用栈这个数据结构：先进后出
  // let resGuard = new ListNode(null);
  // let p = head;
  // const stack = [];
  // while (p) {
  //   stack.push(p);
  //   p = p.next;
  // }
  // let q = resGuard;
  // while (stack.length) {
  //   q.next = stack.pop();
  //   q = q.next;
  // }
  // q.next = null;
  // return resGuard.next;
  // 递归解法
  function recursiveReverse(link) {
    if (!link) {
      let p = new ListNode();
      return { linkHead: p, linkTail: p };
    }
    let p = link;
    let { linkHead, linkTail } = recursiveReverse(link.next);
    p.next = null;
    linkTail.next = p;
    return { linkHead, linkTail: p };
  }
  return recursiveReverse(head).linkHead.next;
};
// @lc code=end
