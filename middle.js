/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const romanMap = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M']];
  let romanArr = [];
  for (let i = 0; i < 4 && num > 0; i++) {
    let posNum = num % 10;
    let [a, b] = romanMap[i];
    if (posNum == 4) {
      romanArr.unshift(b);
      romanArr.unshift(a);
    } else if (posNum == 9) {
      romanArr.unshift(romanMap[i + 1][0]);
      romanArr.unshift(a);
    } else if (posNum < 5) {
      for (let j = 0; j < posNum; j++) {
        romanArr.unshift(a);
      }
    } else if (posNum > 5) {
      for (let j = 0; j < posNum - 5; j++) {
        romanArr.unshift(a);
      }
      romanArr.unshift(b);
    } else {
      romanArr.unshift(b);
    }
    num = parseInt((num / 10).toString());
  }
  return romanArr.join('');
};

// console.log(intToRoman(1994))

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let nl = new ListNode(head.val);
  let p = head.next;
  while (p) {
    let temp = p.next;
    if (p.val < nl.val) {
      p.next = nl;
      nl = p;
    } else {
      let q = nl;
      while (q.next && p.val > q.next.val) {
        q = q.next;
      }
      p.next = q.next;
      q.next = p;
    }
    p = temp;
  }
  return nl;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// const arr = [4, 2, 1, 3];

// const head = new ListNode(arr[0]);
// let l = head;
// for (let i = 1; i < arr.length; i++) {
//   l.next = new ListNode(arr[i]);
//   l = l.next;
// }

// const nl = insertionSortList(head);

// let p = nl;
// while (p) {
//   console.log(p.val);
//   p = p.next;
// }

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let chunkSize = 1;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > chunkSize + i - 1) {
      chunkSize = arr[i] - i;
    } else {
      if (i === chunkSize - 1) {
        num++;
      } else {
      }
    }
  }
  return 1;
};
