// https://leetcode.com/problems/find-eventual-safe-states/
// Notes - https://takeuforward.org/data-structure/find-eventual-safe-states-dfs-g-20/
/**
 * @param {number[][]} graph
 * @return {number[]}
 */

// Time complexity - O(V + E)
// Space Complexity - O(V)

var eventualSafeNodes = function (graph) {
  let vis = new Array(graph.length).fill(0);
  let res = new Set();

  const dfs = (node) => {
    vis[node] = 2;
    for (let it of graph[node]) {
      if (!vis[it] && dfs(it)) {
        return true;
      } else if (vis[it] === 2) {
        return true;
      }
    }
    res.add(node);
    vis[node] = 1;
    return false;
  };

  for (let i = 0; i < graph.length; i++) {
    if (!vis[i] && !dfs(i)) {
      res.add(i);
    }
  }

  return [...res].sort((a, b) => a - b);
};

let graph1 = [[1, 2], [2, 3], [5], [0], [5], [], []];
let graph2 = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []];

console.log(eventualSafeNodes(graph1)); // [2,4,5,6]
console.log(eventualSafeNodes(graph2)); // [4]
