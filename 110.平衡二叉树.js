/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(treeLength(root.left) - treeLength(root.right)) < 2
  );

  function treeLength(root) {
    if (!root) return 0;
    return 1 + Math.max(treeLength(root.left), treeLength(root.right));
  }
};
// @lc code=end
