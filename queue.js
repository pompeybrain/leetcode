class Queue {
  constructor() {
    this.data = [];
    this.headIdx = 0;
  }

  enQueue(x) {
    this.data.push(x);
  }

  deQueue() {
    if (!this.isEmpty()) {
      this.headIdx += 1;
      return true;
    } else {
      return false;
    }
  }

  getFront() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.data[this.headIdx];
    }
  }

  isEmpty() {
    return this.headIdx >= this.data.length;
  }
}

function testQueue() {
  let q = new Queue();
  q.enQueue(1);
  q.enQueue(2);
  q.deQueue();
  q.deQueue();
  console.log(q.getFront());
}

// testQueue();

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.size = k;
  this.data = new Array(k);
  this.head = this.tail = null;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (!this.isFull()) {
    if (this.isEmpty()) {
      this.tail = this.head = 0;
      this.data[this.tail] = value;
    } else {
      this.tail = (this.tail + 1) % this.size;
      this.data[this.tail] = value;
    }
    return true;
  } else {
    return false;
  }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (!this.isEmpty()) {
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = (this.head + 1) % this.size;
    }
    return true;
  } else {
    return false;
  }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) {
    return -1;
  } else {
    return this.data[this.head];
  }
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) {
    return -1;
  } else {
    return this.data[this.tail];
  }
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.head === null && this.tail === null;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  if ((this.tail + 1) % this.size === this.head) {
    return true;
  } else {
    return false;
  }
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

/** questions: */

/**
 * 使用queue来遍历太耗费时间了
 * @param {number[][]} grid
 * @return {number}
 */
var numIslands1 = function(grid) {
  let maxX = grid.length;
  if (!maxX) return 0;
  let maxY = grid[0].length;
  if (!maxY) return 0;

  let num = 0;
  for (let i = 0; i < maxX; i++) {
    for (let j = 0; j < maxY; j++) {
      if (grid[i][j] == 1) {
        let queue = [{ x: i, y: j }];
        num = num + 1;
        while (queue.length) {
          let { x, y } = queue.shift();
          grid[x][y] = 3; // mark
          // push around point
          if (x > 0 && grid[x - 1][y] == 1) {
            queue.push({ x: x - 1, y: y });
          }
          if (x < maxX - 1 && grid[x + 1][y] == 1) {
            queue.push({ x: x + 1, y: y });
          }
          if (y > 0 && grid[x][y - 1] == 1) {
            queue.push({ x: x, y: y - 1 });
          }
          if (y < maxY - 1 && grid[x][y + 1] == 1) {
            queue.push({ x: x, y: y + 1 });
          }
        }
      }
    }
  }
  return num;
};

const numIslands2 = function(grid) {
  const maxI = grid.length;
  if (!maxI) return 0;
  const maxJ = grid[0].length;
  if (!maxJ) return 0;
  let num = 0;
  for (let i = 0; i < maxI; i++) {
    for (let j = 0; j < maxJ; j++) {
      if (grid[i][j] == 1) {
        num++;
        bfsMark(grid, i, j);
      }
    }
  }

  function bfsMark(arr, x, y) {
    arr[x][y] = 3;
    if (x > 0 && grid[x - 1][y] == 1) {
      bfsMark(arr, x - 1, y);
    }
    if (x < maxI - 1 && grid[x + 1][y] == 1) {
      bfsMark(arr, x + 1, y);
    }
    if (y > 0 && grid[x][y - 1] == 1) {
      bfsMark(arr, x, y - 1);
    }
    if (y < maxJ - 1 && grid[x][y + 1] == 1) {
      bfsMark(arr, x, y + 1);
    }
  }
  return num;
};

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let start = '0000';
  return 0;
};
