/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  /*1. 遍历数组，target - 当前数，结果与剩下的进行遍历比较 */
  for (let i = 0; i < nums.length; i++) {
    let sub = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (sub == nums[j]) {
        return [i, j];
      }
    }
  }
};
// console.log(twoSum([1, 3, 4, 5], 6))

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MaxInt = Math.pow(2, 31) - 1;
  const MinInt = -Math.pow(2, 31);
  let reversedX = 0;
  while (x != 0) {
    let remainder = x % 10;
    if (reversedX > (MaxInt - remainder) / 10) {
      return 0;
    }
    if (reversedX < (MinInt - remainder) / 10) {
      return 0;
    }
    reversedX = reversedX * 10 + remainder;
    x = parseInt(x / 10);
  }
  return reversedX;
};

// console.log(reverse(1563847412))

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  } else {
    let originalX = x;
    let reversedX = 0;
    while (x != 0) {
      let remainder = x % 10;
      reversedX = reversedX * 10 + remainder;
      x = parseInt(x / 10);
    }
    return reversedX === originalX;
  }
};

// console.log(isPalindrome(11213))

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let strArr = s.split('');
  let intNum = 0;
  for (let i = 0; i < strArr.length; i++) {
    let curRoman = strArr[i];
    if (curRoman == 'I' && (strArr[i + 1] == 'V' || strArr[i + 1] == 'X')) {
      intNum += romanMap[strArr[i + 1]] - romanMap[curRoman];
      i++;
    } else if (curRoman == 'X' && (strArr[i + 1] == 'L' || strArr[i + 1] == 'C')) {
      intNum += romanMap[strArr[i + 1]] - romanMap[curRoman];
      i++;
    } else if (curRoman == 'C' && (strArr[i + 1] == 'D' || strArr[i + 1] == 'M')) {
      intNum += romanMap[strArr[i + 1]] - romanMap[curRoman];
      i++;
    } else {
      intNum += romanMap[curRoman];
    }
  }
  return intNum;
};
// console.log(romanToInt('MCMXCIV'))

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let commonPrefix = strs[0] || '';
  for (let i = 0; i < strs.length && commonPrefix !== ''; i++) {
    const curStr = strs[i];
    let l = commonPrefix.length > curStr.length ? curStr.length : commonPrefix.length;
    let j = 0;
    while (j < l && commonPrefix.charAt(j) == curStr[j]) {
      j++;
    }
    commonPrefix = commonPrefix.substr(0, j);
  }
  return commonPrefix;
};
// console.log(longestCommonPrefix(["flower","flow","flight"]))

/**
 * @param {string} s
 * @return {boolean}
 */
var isValidParentheses = function(s) {
  const parentheses = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const stack = [];
  while (s !== '') {
    let curP = s.charAt(0);
    if (curP in parentheses) {
      stack.push(curP);
    } else {
      let preP = stack.pop();
      if (parentheses[preP] !== curP) {
        return false;
      }
    }
    s = s.slice(1);
  }
  return stack.length === 0;
};

// console.log(isValidParentheses('({[]()})'))

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * {val:'',next:''}
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let a = l1;
  let b = l2;
  let mergedL;
  let pointer;
  while (a || b) {
    let min;
    if ((!a && b) || (a && b && a.val > b.val)) {
      min = b;
      b = b.next;
    } else {
      min = a;
      a = a.next;
    }
    if (pointer) {
      pointer.next = min;
      pointer = min;
    } else {
      mergedL = pointer = min;
    }
  }
  if (!mergedL) {
    mergedL = a;
  }
  return mergedL;
};
// console.log(
//   mergeTwoLists(
//     { val: 1, next: { val: 2, next: { val: 4, next: null } } },
//     { val: 1, next: { val: 3, next: { val: 4, next: null } } }
//   )
// )

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0,
    j = 0;
  while (i < nums.length && j < nums.length) {
    let prev = nums[j];
    for (i = j + 1; i < nums.length; i++) {
      if (prev == nums[i]) {
        nums.splice(i, 1);
        break;
      } else {
        j++;
        prev = nums[j];
      }
    }
  }
  return nums.length;
};
// console.log(removeDuplicates([1, 1, 2]))

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0,
    j = 0;
  while (i < nums.length && j < nums.length) {
    for (i = j; i < nums.length; i++) {
      if (val == nums[i]) {
        nums.splice(i, 1);
        break;
      } else {
        j++;
      }
    }
  }
  return nums.length;
};

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) {
    return 0;
  }
  //  return haystack.indexOf(needle) 这句话要快一些，为什么?
  let hl = haystack.length;
  let nl = needle.length;
  for (let i = 0; i <= hl - nl; i++) {
    let j = 0;
    for (; j < nl; j++) {
      if (haystack.charAt(i + j) !== needle.charAt(j)) {
        break;
      }
    }
    if (j == nl) {
      return i;
    }
  }
  return -1;
};

// console.log(strStr('helloworld', 'ld'))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (!nums.length) {
    return 0;
  }
  if (target <= nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  if (target == nums[nums.length - 1]) {
    return nums.length - 1;
  }
  // 二分查找
  let left = 0;
  let right = nums.length;
  while (left < right - 1) {
    let middle = parseInt((left + right) / 2);
    if (nums[middle] < target) {
      left = middle;
    } else if (nums[middle] > target) {
      right = middle;
    } else {
      return middle;
    }
  }
  return right;
};
// console.log(searchInsert([1, 3, 5, 7], 6))

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  function generate(numStr) {
    const numberMap = {
      '1': '11',
      '2': '12'
    };
    let say = '';
    let charCount = 1;
    let char = numStr.substr(0, 1);
    numStr = numStr.substr(1);
    while (numStr) {
      let curChar = numStr.substr(0, 1);
      numStr = numStr.substr(1);
      if (curChar == char && charCount < 10) {
        charCount++;
      } else {
        say += '' + charCount + char;
        charCount = 1;
        char = curChar;
      }
    }
    say += '' + charCount + char;
    return say;
  }

  const countSays = ['', '1', '11', '21', '1211'];
  if (!countSays[n]) {
    if (countSays[n - 1]) {
      countSays[n] = generate(countSays[n - 1]);
      return countSays[n];
    } else {
      return generate(countAndSay(n - 1));
    }
  } else {
    return countSays[n];
  }
};

// console.log(countAndSay(6))

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let l = nums.length;
  let currentSum = nums[0];
  let sum = currentSum;
  for (let i = 1; i < l; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += nums[i];
    if (currentSum > sum) {
      sum = currentSum;
    }
  }
  return sum;
};

// console.log(maxSubArray([-2, -1,0]))
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let execRes = /(\S+)\s*$/.exec(s);
  return execRes ? execRes[1].length : 0;
};

// console.log(lengthOfLastWord('a '))

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let l = digits.length;
  if (!l) {
    return [1];
  }
  if (digits[l - 1] < 9) {
    digits[l - 1] += 1;
    return digits;
  } else {
    let pre = plusOne(digits.slice(0, l - 1));
    pre.push(0);
    return pre;
  }
};

// console.log(plusOne([9]))
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let al = a.length;
  let bl = b.length;
  let ml = al > bl ? al : bl;
  let carry = 0;
  let resArr = [];
  for (let i = 1; i <= ml; i++) {
    let aChar = a[al - i] ? a[al - i] - 0 : 0;
    let bChar = b[bl - i] ? b[bl - i] - 0 : 0;
    let sum = carry + aChar + bChar;
    resArr.unshift(sum % 2);
    if (sum > 1) {
      carry = 1;
    } else {
      carry = 0;
    }
  }
  if (carry > 0) {
    resArr.unshift(carry);
  }
  return resArr.join('');
};
// console.log(addBinary('11', '11'))
// console.log(addBinary('1001', '110'))

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let mid = Math.ceil(x / 2);
  for (let i = 0; i <= mid; i++) {
    if (i * i <= x && (i + 1) * (i + 1) > x) {
      return i;
    }
  }
};
// console.log(mySqrt(15))

/**
 * analysis: n阶楼梯 数应等于 n-1 和 n-2 阶之和 因为 1次：1 + n-1 ；1次：2 + n-2
 * 由此可得递归解法 climbStairs
 * 递归解法占用大量的栈空间，初步优化：尾递归 或者 改写成循环
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

// console.log(climbStairs(50))

/**
 * f(1): 1
 * f(2): 2
 * f(3): f(2) + f(1)
 * f(4): f(3) + f(2) / f(2) + f(1) + f(2)
 */
function tailClimbStairs(n, resn, resn_2) {
  if (n === 1) {
    return resn + 1;
  }
  if (n === 2) {
    return resn + 2;
  }
  return tailClimbStairs(n - 1, resn + resn_2, resn);
}
// console.log(tailClimbStairs(4, 0, 1));

function loopClimbStairs(n) {
  const arr = [];
  arr[1] = 1;
  arr[2] = 2;
  let i = 1;
  while (i < n - 1) {
    arr[i + 2] = arr[i] + arr[i + 1];
    i++;
  }
  return arr[n];
}

// console.log(loopClimbStairs(300));

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;
  let p = head;
  let cur = head.val;
  while (p && p.next) {
    if (cur === p.next.val) {
      p.next = p.next.next;
    } else {
      cur = p.next.val;
      p = p.next;
    }
  }
  return head;
};

/**
 * analysis: i nums2的索引； j nums1的索引 找到 nums2[i]对应的nums1的位置，然后移动元素
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0;
  let j = 0;

  while (i < n && j < m + i) {
    //find index
    while (nums1[j] <= nums2[i] && j < m + i) {
      j++;
    }
    // move
    let k = m + i;
    while (k > j) {
      nums1[k] = nums1[k - 1];
      k--;
    }
    // insert
    nums1[j] = nums2[i];
    i++;
    j++;
  }

  // nums1 先处理完
  if (i < n) {
    while (i < n) {
      nums1[m + i] = nums2[i];
      i++;
    }
  }
};

// let nums1 = [1, 3, 4, 0, 0, 0]
// let nums2 = [2, 5, 6]
// let nums1 = [0]
// let nums2 = [1]
// merge(nums1, 3, nums2, 3);
// merge(nums1, 0, nums2, 1);
// [1, 2, 2, 5, 6, 3, 0, 0, 0]

// console.log(nums1);

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * analysis 同时相同顺序遍历两棵树，保证一致
 * 1. 遍历顺序是否能减少时间复杂度？
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p == q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  let pStack = [p];
  let qStack = [q];
  while (pStack.length && qStack.length) {
    let pNode = pStack.pop();
    let qNode = qStack.pop();
    if (pNode.val === qNode.val) {
      if (pNode.left && qNode.left) {
        pStack.push(pNode.left);
        qStack.push(qNode.left);
      } else if (pNode.left || qNode.left) {
        return false;
      }

      if (pNode.right && qNode.right) {
        pStack.push(pNode.right);
        qStack.push(qNode.right);
      } else if (pNode.right || qNode.right) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

// leetcode 中显示两个方法均是68ms，速度上没有太大提升，因为遍历顺序一致，仅是递归和非递归的写法，递归写法更简洁
function recursionIsSameTree(p, q) {
  if (p == q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  } else {
    return recursionIsSameTree(p.left, q.left) && recursionIsSameTree(p.right, q.right);
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * analysis: 镜像树：左右对称，即其左右子树互为镜像树
 * 1. 递归解法 ，左右子树互为镜像
 * 2. 非递归，用栈存储节点，左右子树，入栈顺序相反，判断是否值相等
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function isMirror(t1, t2) {
    if (t1 == t2) {
      return true;
    }
    if (!t1 || !t2) {
      return false;
    }
    return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
  }
  return isMirror(root, root);
};

function isSymmetric1(root) {
  const lStack = [root];
  const rStack = [root];
  while (lStack.length && rStack.length) {
    let leftT = lStack.pop();
    let rightT = rStack.pop();
    if (!leftT && !rightT) {
      continue;
    } else if (!leftT || !rightT) {
      return false;
    } else {
      if (leftT.val !== rightT.val) {
        return false;
      } else {
        lStack.push(leftT.left);
        rStack.push(rightT.right);
        lStack.push(leftT.right);
        rStack.push(rightT.left);
      }
    }
  }
  return true;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *     1
 *   2   3
 * 4       5
 *
 *     3
 *   9   20
 *     15  7
 *
 *         0
 *      2     4
 *    1    3   -1
 *  5  1     6    8
 * analysis 深度优先搜索该树至null即叶节点，获得depth后与之前的最大depth比较，记录最大值
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let maxDepth = 0;
  if (!root) {
    return maxDepth;
  }
  let depthStack = [1];
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    let depth = depthStack.pop();
    if (!node.left && !node.right) {
      maxDepth = depth > maxDepth ? depth : maxDepth;
      continue;
    }
    if (node.right) {
      stack.push(node.right);
      depthStack.push(depth + 1);
    }
    if (node.left) {
      stack.push(node.left);
      depthStack.push(depth + 1);
    }
  }
  return maxDepth;
};

function add(x, y) {
  return x + y;
}

/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  if (!A.length) return 0;
  A = A.map(str => {
    return str.split('');
  });
  let l = A[0].length;
  let m = A.length;
  let num = 0;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < m - 1; j++) {
      if (A[j][i] > A[j + 1][i]) {
        num++;
        break;
      }
    }
  }
  return num;
};

// const a = ['cba', 'daf', 'ghi'];
// console.log(minDeletionSize(a));

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  // let res = [];
  let i = 0;
  let j = 1;
  while (i < A.length - 1 && j < A.length) {
    while (A[i] % 2 === 0 && i < A.length - 1) {
      i += 2;
    }
    while (A[j] % 2 !== 0 && j < A.length) {
      j += 2;
    }
    if (i < A.length - 1 && j < A.length) {
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    } else {
      break;
    }
  }
  return A;
};

// const a = [4, 2, 5, 7];
// console.log(sortArrayByParityII(a));

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  if (!A.length) return [];
  let i = 0;
  let j = A.length - 1;
  while (i < j) {
    while (A[i] % 2 === 0 && i < A.length) {
      i++;
    }
    while (A[j] % 2 !== 0 && j >= 0) {
      j--;
    }
    if (i < j && i < A.length && j > 0) {
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    } else {
      break;
    }
  }
  return A;
};

// const a = [3, 1];
// console.log(sortArrayByParity(a));

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumWithSortedArray = function(numbers, target) {
  let i = 0;
  let j = numbers.length;
  if (!j) return [];
  while (i < numbers.length) {
    if (numbers[j] < target - numbers[i]) {
      i++;
    } else if (numbers[j] === target - numbers[i]) {
      return [i + 1, j + 1];
    } else {
      j--;
    }
  }
  return [];
};

// const a = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSumWithSortedArray(a, target));

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  if (!k) return;
  this.k = k;
  let largests = [];
  if (nums.length) {
    largests.push(nums[0]);
  }
  for (let i = 1; i < nums.length; i++) {
    if (largests.length < k) {
      let idx = 0;
      while (largests[idx] < nums[i] && idx < largests.length) {
        idx++;
      }
      for (let j = largests.length; j > idx; j--) {
        largests[j] = largests[j - 1];
      }
      largests[idx] = nums[i];
    } else {
      let j = 0;
      while (j < k && nums[i] > largests[j]) {
        largests[j] = largests[j + 1];
        j++;
      }
      largests[j - 1] = nums[i];
    }
  }
  this.largests = largests;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  let largests = this.largests;
  let k = this.k;
  if (largests.length < k) {
    let idx = 0;
    while (largests[idx] < val && idx < largests.length) {
      idx++;
    }
    for (let j = largests.length; j > idx; j--) {
      largests[j] = largests[j - 1];
    }
    largests[idx] = val;
  } else {
    let j = 0;
    while (j < k && val > largests[j]) {
      largests[j] = largests[j + 1];
      j++;
    }
    largests[j - 1] = val;
  }
  return this.largests[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */
const k = 3;
const nums = [2, 1, 7, 4, 6];
var obj = new KthLargest(k, nums);
var param_1 = obj.add(5);
console.log(param_1);
