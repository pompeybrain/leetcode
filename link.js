function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 数组转链表
 */
function arrToLink(arr) {
  if (!arr.length) {
    return null;
  }
  let node = new ListNode(arr[0]);
  node.next = arrToLink(arr.slice(1, arr.length));
  return node;
}

/**
 * 遍历链表
 */
function visitLink(link) {
  let p = link;
  while (p !== null) {
    console.log(p.val);
    p = p.next;
  }
}

module.exports = { arrToLink, ListNode, visitLink };
