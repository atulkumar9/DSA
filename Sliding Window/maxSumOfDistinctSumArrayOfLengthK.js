/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  if (new Set(nums).size < k) return 0;
  let [i, j, sum, maxSum, set] = [0, 0, 0, 0, new Map()];
  while (j < nums.length) {
    if (set.has(nums[j])) {
      while (nums[i] !== nums[j]) {
        set.delete(nums[i]);
        sum -= nums[i];
        i++;
      }
      i++;
    } else {
      set.set(nums[j]);
      sum += nums[j];
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      maxSum = Math.max(maxSum, sum);
      sum -= nums[i];
      set.delete(nums[i]);
      i++;
      j++;
    }
  }
  return maxSum;
};

let nums1 = [1, 5, 4, 2, 9, 9, 9],
  k1 = 3;
console.log(maximumSubarraySum(nums1, k1));

let nums2 = [4, 4, 4],
  k2 = 3;
console.log(maximumSubarraySum(nums2, k2));

let nums3 = [1, 1, 1, 7, 8, 9],
  k3 = 3;
console.log(maximumSubarraySum(nums3, k3));

let nums4 = [1, 1, 2],
  k4 = 2;
console.log(maximumSubarraySum(nums4, k4));

let nums5 = [1, 1, 1, 1, 1, 1],
  k5 = 1;
console.log(maximumSubarraySum(nums5, k5));
