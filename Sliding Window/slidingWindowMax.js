/**
 * Problem Statement - https://leetcode.com/problems/sliding-window-maximum/
 * Best Explanation - https://www.youtube.com/watch?v=DfljaUwZsOk
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let [i, j, out, queue] = [0, 0, [], []];
  while (j < nums.length) {
    while (queue.length && nums[j] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(j);
    if (j >= k - 1) {
      out.push(nums[queue[0]]);
      if (i === queue[0]) {
        queue.shift();
      }
      i++;
    }
    j++;
  }
  return out;
};

var maxSlidingWindow2 = function (nums, k) {
  let [out, queue] = [[], []];
  for (let i = 0; i < nums.length; i++) {
    // remove from back until the new num - nums[i] is greater than the number at the index stored at the back of the queue;
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    // when i becomes greater than the first element in the queue (max), need to remove this index, since it can't become the max of a sliding window again.
    if (queue.length && i >= queue[0] + k) {
      queue.shift();
    }

    // pushing the ith item in the queue (need to push this in all the cases);
    queue.push(i);

    // if the window size is reached we need to push the number at the zero'th index of the queue to the output.
    if (i >= k - 1) {
      out.push(nums[queue[0]]);
    }
  }
  return out;
};

let nums1 = [1, 3, -1, -3, 5, 3, 6, 7],
  k1 = 3;
console.log(maxSlidingWindow2(nums1, k1));

let nums2 = [1],
  k2 = 1;
console.log(maxSlidingWindow2(nums2, k2));

let nums3 = [1, 3, 1, 2, 0, 5],
  k3 = 3;
console.log(maxSlidingWindow2(nums3, k3));

i = 0
queue = [0]
out = []

i = 1
queue = [1] // indexes
      = [3]
out = []

i = 2
queue = [1, 2] // indexes
      = [3, 1]
out = [3]

i = 3
queue = [1, 3] // indexes
      = [3, 2]
out = [3, 3]

i = 4
queue = [3, 4] // indexes
      = [2, 0]
out = [3, 3, 2]