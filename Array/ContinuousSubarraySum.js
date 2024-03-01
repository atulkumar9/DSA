// https://leetcode.com/problems/continuous-subarray-sum/description/

// My Approach -

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var checkSubarraySum = function (nums, k) {
  let prefixSumToNoOfElemMap = {};
  let prefixSum = 0;
  let totalElemInSubArray = 0;
  let zeroCount = 0;
  let maxZeroCount = 0;
  let removalSum = 0;
  if (k === 1 && nums.length >= 2) return true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 || nums[i] === k) {
      zeroCount++;
      maxZeroCount = Math.max(maxZeroCount, zeroCount);
    } else {
      zeroCount = 0;
    }
    totalElemInSubArray++;
    prefixSum += nums[i];

    if (prefixSum % k === 0 && totalElemInSubArray > 1) {
      return true;
    }

    for (let j = 1; j < prefixSum / k; j++) {
      removalSum = prefixSum - k * j;
      if (
        prefixSumToNoOfElemMap.hasOwnProperty(removalSum) &&
        totalElemInSubArray - prefixSumToNoOfElemMap[removalSum] >= 2
      ) {
        return true;
      }
    }
    prefixSumToNoOfElemMap[prefixSum] = totalElemInSubArray;
  }
  return maxZeroCount >= 2;
};

// Better Approach - https://www.youtube.com/watch?v=OKcrLfR-8mE

// Faster Solution

var checkSubarraySum = function (nums, k) {
  let prefixSumToNoOfElemMap = {};
  let prefixSum = 0;
  let remainder = 0;
  prefixSumToNoOfElemMap[0] = -1;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    remainder = prefixSum % k;
    if (!prefixSumToNoOfElemMap.hasOwnProperty(remainder)) {
      prefixSumToNoOfElemMap[remainder] = i;
    } else if (i - prefixSumToNoOfElemMap[remainder] > 1) {
      return true;
    }
  }
  return false;
};
