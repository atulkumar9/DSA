// https://leetcode.com/problems/maximum-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

// My Solution

var maxSubArray = function (nums) {
  let maxTillNow = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > maxTillNow) {
      maxTillNow = currentSum;
    }
    if (nums[i] > currentSum) {
      currentSum = nums[i];
    }
    if (nums[i] > maxTillNow) {
      maxTillNow = nums[i];
    }
  }

  return maxTillNow;
};

// Solution 2

var maxSubArray2 = function (nums) {
  let maxTillNow = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    maxTillNow = Math.max(maxTillNow, currentSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxTillNow;
};
