/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  //暴力遍历法：时间复杂度：O(mn)
  // while (headA) {
  //   let p = headB;
  //   while (p) {
  //     if (headA === p) {
  //       return p;
  //     } else {
  //       p = p.next;
  //     }
  //   }
  //   headA = headA.next;
  // }
  // return null
  //hashmap 方法 时间复杂度 O(m+n)
  // let aMap = new Map();
  // aMap.toString();
  // while (headA) {
  //   aMap.set(headA, true);
  //   headA = headA.next;
  // }
  // while (headB) {
  //   if (aMap.get(headB)) {
  //     return headB;
  //   } else {
  //     headB = headB.next;
  //   }
  // }
  // return null;
  // 双指针法：如果相交 则a+b = b+a，时间复杂度 O(m+n)
  let p = headA;
  let q = headB;
  while (p !== q) {
    if (p) {
      p = p.next;
    } else {
      p = headB;
    }
    if (q) {
      q = q.next;
    } else {
      q = headA;
    }
  }
  return p;
};
// @lc code=end
