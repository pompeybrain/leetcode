/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let i = 0;
  while (i < nums.length - 1) {
    let j = i + 1;
    while (j < i + k + 1 && j < nums.length) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
      j++;
    }
    i++;
  }
  return false;
};
// @lc code=end

console.log(containsNearbyAlmostDuplicate([7, 1, 3], 2, 3));
