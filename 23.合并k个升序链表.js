/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  function mergeTwoLists(l1, l2) {
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
  }

  //递归解法 out of memory
  // function recursiveMerge(list, otherLists) {
  //   if (!otherLists.length) return list;
  //   let newList = mergeTwoLists(list, otherLists[0]);
  //   return recursiveMerge(newList, otherLists.slice(1, otherLists.length));
  // }
  // if (lists.length < 2) return lists[0] || null;
  // return recursiveMerge(lists[0], lists.slice(1, lists.length));

  //优化递归解法 不再使用slice
  // function recursiveMerge(list, currentIdx, allLists) {
  //   if (currentIdx > allLists.length - 1) return list;
  //   let newList = mergeTwoLists(list, allLists[currentIdx]);
  //   return recursiveMerge(newList, currentIdx + 1, allLists);
  // }
  // if (lists.length < 2) return lists[0] || null;
  // return recursiveMerge(lists[0], 1, lists);

  //迭代解法
  // if (lists.length < 2) return lists[0] || null;
  // let newList = mergeTwoLists(lists[0], lists[1]);
  // for (let i = 2; i < lists.length; i++) {
  //   newList = mergeTwoLists(newList, lists[i]);
  // }
  // return newList;

  // 分治法：
  function merge(allList, l, r) {
    if (l === r) return allList[l];
    if (l > r) return null;
    let mid = Math.floor((l + r) / 2);
    return mergeTwoLists(merge(allList, l, mid), merge(allList, mid + 1, r));
  }
  if (lists.length < 2) return lists[0] || null;
  return merge(lists, 0, lists.length - 1);

  //使用优先队列
  
};
// @lc code=end

visitLink(
  mergeKLists([arrToLink([1, 4, 5]), arrToLink([1, 3, 4]), arrToLink([2, 6])])
);
