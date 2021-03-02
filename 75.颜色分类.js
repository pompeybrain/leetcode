/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 0-red(0)-l(1)-white(1)-r(1)-blue(2)-nums.length
  let l = 0; //白色
  let r = nums.length - 1;
  let i = 0;
  while (i <= r) {
    if (nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[l];
      nums[l] = temp;
      l++;
      i++;
    } else if (nums[i] === 2) {
      let temp = nums[i];
      nums[i] = nums[r];
      nums[r] = temp;
      r--;
    } else {
      i++;
    }
  }
  return nums;
};
// @lc code=end

console.log(sortColors([2, 0, 2, 1, 1, 0]));
