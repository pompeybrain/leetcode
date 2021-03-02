/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let res = [];
  let stack = [];
  // let nextFloor = [];
  if (!root) return [];
  stack.push(root);
  let floor = [];
  while (stack.length) {
    floor = [];
    let l = stack.length;
    for (let i = 0; i < l; i++) {
      let node = stack.shift();
      floor.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    res.unshift(floor);
  }
  return res;
};
// @lc code=end
