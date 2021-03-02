/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let merged = [];
  let inserted = false;
  let newArr = newInterval;
  intervals.forEach(pair => {
    if (pair[1] < newArr[0] || inserted) {
      // newArr右边区间或已插入的后续区间
      merged.push(pair);
    } else if (pair[0] <= newArr[0] && pair[1] >= newArr[1]) {
      // newArr落在区间中
      merged.push(pair);
      inserted = true;
    } else if (pair[0] <= newArr[0] && pair[1] >= newArr[0]) {
      // 左边界此落在区间中
      newArr[0] = Math.min(pair[0], newArr[0]);
      newArr[1] = Math.max(pair[1], newArr[1]);
    } else if (pair[0] <= newArr[1] && pair[1] >= newArr[1]) {
      // 右边界此落在区间中
      newArr[0] = Math.min(pair[0], newArr[0]);
      newArr[1] = pair[1];
    } else if (pair[0] <= newArr[0] && pair[1] <= newArr[1]) {
      // 区间在newArr内
    } else if (pair[0] > newArr[1]) {
      // 最小的右边界外面
      merged.push(newArr);
      merged.push(pair);
      inserted = true;
    }
  });
  if (!inserted) merged.push(newArr);
  return merged;
};
// @lc code=end

console.log(insert([[1, 5]], [2, 7]));
