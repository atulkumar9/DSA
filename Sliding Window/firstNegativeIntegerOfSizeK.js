// Problem Statement - https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1

/*
Intution - 
[12 -1 -7 8 -15 30 16 28]
3

if (i === queue[0][1]) {
    queue.shift();
}

j = 0, i = 0;
ans = []
queue = []

j = 1, i = 0;
ans = []
queue = [[-1, 1]]

j = 2, i = 0;
ans = [-1]
queue = [[-1, 1], [-7, 2]];

j = 3, i = 1;
ans = [-1, -1]
queue = [[-1, 1], [-7, 2]];

j = 4, i = 2;
ans = [-1, -1, -7]
queue = [[-7, 2], [-15, 4]];

j = 5, i = 3;
ans = [-1, -1, -7, -15]
queue = [[-15, 4]];

j = 6, i = 4;
ans = [-1, -1, -7, -15, -15];
queue = [[-15, 4]];
*/

const printFirstNegativeInteger = (n, k, arr) => {
  let [i, j, ans, queue] = [0, 0, [], []];
  while (j < n) {
    if (arr[j] < 0) {
      queue.push(arr[j]);
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (queue[0] === undefined) {
        ans.push(0);
      } else if (arr[i] === queue[0]) {
        ans.push(queue[0]);
        queue.shift();
      } else {
        ans.push(queue[0]);
      }
      i++;
      j++;
    }
  }
  return ans;
};

let N1 = 5,
  arr1 = [-8, 2, 3, -6, 10],
  K1 = 2;
console.log(printFirstNegativeInteger(N1, K1, arr1)); // [-8 0 -6 -6]

let N2 = 8,
  arr2 = [12, -1, -7, 8, -15, 30, 16, 28],
  K2 = 3;

console.log(printFirstNegativeInteger(N2, K2, arr2)); // [-1 -1 -7 -15 -15 0]
