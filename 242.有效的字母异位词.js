/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sCharsMap = {};
  let sCharSum = s.split("").reduce((prev, cur) => {
    sCharsMap[cur.charCodeAt(0)] = true;
    return cur.charCodeAt(0) + prev;
  }, 0);
  let tCharSum = 0;
  for (let i = 0; i < t.length; i++) {
    if (!sCharsMap[t.charCodeAt(i)]) {
      return false;
    }
    tCharSum += t.charCodeAt(i);
  }
  return sCharSum === tCharSum;
};
// @lc code=end

console.log(isAnagram("ac", "bb"));
