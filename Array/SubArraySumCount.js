/*
Problem Statement: https://leetcode.com/problems/subarray-sum-equals-k/description/

Resource: https://takeuforward.org/arrays/count-subarray-sum-equals-k/

Better explainer video :- https://www.youtube.com/watch?v=fFVZt-6sgyo

Intution - 
Remove the prefixsum - sum values to get the sum in the prefix subarray.
Calculate the count of the prefixes as we go in the loop for each item
*/

const TotalSubArrayWithSumK = (input, sum) => {
  const prefixSumToCountMap = {};
  let noOfSubArrays = 0;
  let prefixSum = 0;
  let sumToRemove = 0;
  prefixSumToCountMap[0] = 1;
  for (let i = 0; i < input.length; i++) {
    prefixSum += input[i];
    sumToRemove = prefixSum - sum;
    if (prefixSumToCountMap.hasOwnProperty(sumToRemove)) {
      noOfSubArrays += prefixSumToCountMap[sumToRemove];
    }
    if (prefixSumToCountMap.hasOwnProperty(prefixSum)) {
      prefixSumToCountMap[prefixSum] = prefixSumToCountMap[prefixSum] + 1;
    } else {
      prefixSumToCountMap[prefixSum] = 1;
    }
  }
  return noOfSubArrays;
};

const input1 = [1, 1, 1];
const k1 = 2;
console.log(TotalSubArrayWithSumK(input1, k1)); // 2

const input2 = [1, 2, 3];
const k2 = 3;
console.log(TotalSubArrayWithSumK(input2, k2)); // 2

const input3 = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
const k3 = 3;
console.log(TotalSubArrayWithSumK(input3, k3)); // 8
