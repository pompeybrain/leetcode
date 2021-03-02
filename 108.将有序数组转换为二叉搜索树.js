/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return buildBST(nums, 0, nums.length - 1);
  function buildBST(arr, start, end) {
    if (start === end) return new TreeNode(arr[start]);
    if (start > end) return null;
    let middleIndex = parseInt((end - start) / 2) + start;
    let node = new TreeNode(arr[middleIndex]);
    if (middleIndex > start) node.left = buildBST(arr, start, middleIndex - 1);
    if (middleIndex < end) node.right = buildBST(arr, middleIndex + 1, end);
    return node;
  }
};
// @lc code=end
