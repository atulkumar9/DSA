// https://leetcode.com/problems/maximum-sum-circular-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let maxTillNow = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  let numsflat = [...nums, ...nums];
  for (let i = 0, j = 0; i < numsflat.length; i++) {
    currentSum += numsflat[i];
    if (currentSum > maxTillNow) {
      maxTillNow = currentSum;
    }
    if (numsflat[i] > currentSum) {
      currentSum = numsflat[i];
    }
    if (numsflat[i] > maxTillNow) {
      maxTillNow = numsflat[i];
    }
    if (j === (i + 1) % nums.length) {
      j++;
      i = j;
      currentSum = 0;
    }
  }
  return maxTillNow;
};

// The above solution gives the TLE on leetcode, so we need a better solution

// Hard to figure out the intution
// explainer video - https://www.youtube.com/watch?v=fxT9KjakYPM
/* 
the max sum in a circular will either be
- maximum of the Subarray
- total - minimum of the subarray
*/

var maxSubarraySumCircularOp = function (nums) {
  let maxTillNow = Number.NEGATIVE_INFINITY;
  let minTillNow = Number.POSITIVE_INFINITY;
  let currentMaxSum = 0;
  let currentMinSum = 0;
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
    currentMaxSum += nums[i];
    currentMinSum += nums[i];
    maxTillNow = Math.max(maxTillNow, currentMaxSum);
    minTillNow = Math.min(minTillNow, currentMinSum);
    if (currentMaxSum < 0) {
      currentMaxSum = 0;
    }
    if (currentMinSum > 0) {
      currentMinSum = 0;
    }
  }
  // console.log(maxTillNow, minTillNow, totalSum);
  if (maxTillNow < 0) return maxTillNow;
  return Math.max(maxTillNow, totalSum - minTillNow);
};

// [5, -3, 5, 5, -3, 5]

const nums1 = [1, -2, 3, -2];
const nums2 = [5, -3, 5];
const nums3 = [-3, -2, -3];
const nums4 = [-2, 4, -5, 4, -5, 9, 4];

console.log(maxSubarraySumCircularOp(nums1));
console.log(maxSubarraySumCircularOp(nums2));
console.log(maxSubarraySumCircularOp(nums3));
console.log(maxSubarraySumCircularOp(nums4));
