/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  /**
   * 1: 循环比较当前[1]与后续所有的[0]，有重叠的记下索引，合并区间，继续往后比较
   * 2: 漏掉了当前数组完全大于比较数组的情况
   * 3：需要考虑后面的数组涵盖前面的数组的情况，即j每次都要从0开始
   * 4: 设置i的时候需要考虑到设置较小下标
   * 5: 先对数组[0]排序后，较容易处理
   */
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [];
  intervals.forEach(pair => {
    if (!merged.length || merged[merged.length - 1][1] < pair[0]) {
      merged.push(pair);
    } else {
      //需要合并
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        pair[1]
      );
    }
  });
  return merged;

  // let i = 0; // 当前数组

  // while (i < intervals.length && intervals[i]) {
  //   let j = 0; //需要比较的数组
  //   while (intervals[i] && intervals[j] && j < intervals.length) {
  //     if (
  //       j !== i &&
  //       intervals[i][1] >= intervals[j][0] &&
  //       intervals[i][0] <= intervals[j][1]
  //     ) {
  //       intervals[Math.min(i, j)] = [
  //         Math.min(intervals[i][0], intervals[j][0]),
  //         Math.max(intervals[i][1], intervals[j][1]),
  //       ];
  //       intervals.splice(Math.max(i, j), 1);
  //       i = Math.min(i, j);
  //     } else {
  //       j++;
  //     }
  //   }
  //   i++;
  // }
  // return intervals;
};
// @lc code=end

console.log(
  merge([
    [3, 5],
    [0, 0],
    [4, 4],
    [0, 2],
    [5, 6],
    [4, 5],
    [3, 5],
    [1, 3],
    [4, 6],
    [4, 6],
    [3, 4],
  ])
);
