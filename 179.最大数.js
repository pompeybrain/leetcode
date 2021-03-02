/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  let sortedNums = nums.sort((a, b) => {
    // let res = ("" + b).slice(0, 1) - ("" + a).slice(0, 1);
    // if (res === 0) {
    //   res = ("" + b).length - ("" + a).length;
    // }
    // if (res === 0) {
    //   res = b - a;
    // }
    // return res;
    return "" + b + ("" + a) - ("" + a + ("" + b));
  });
  while (sortedNums[0] === 0 && sortedNums.length > 1) {
    sortedNums = sortedNums.slice(1, sortedNums.length);
  }
  return sortedNums.join("");
};
// @lc code=end

console.log(largestNumber([3, 30, 34, 5, 9]));
