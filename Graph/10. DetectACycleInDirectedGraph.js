//https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab
//https://takeuforward.org/data-structure/detect-cycle-in-a-directed-graph-using-dfs-g-19/

/**
 * @param {number[][]} adj
 * @returns {boolean}
 */

/**
 * Algo-
 * On the same path node has to be visited again
 */
const DetectCycle = (graph) => {
  let vis = new Array(graph.length).fill(0);
  let path = new Array(graph.length).fill(0);

  const dfs = (node) => {
    vis[node] = 1;
    path[node] = 1;
    for (let it of graph[node]) {
      if (!vis[it] && dfs(it)) {
        return true;
      } else if (path[it]) {
        return true;
      }
    }
    path[node] = 0;
    return false;
  };

  for (let i = 0; i < graph.length; i++) {
    if (!vis[i] && dfs(i)) {
      return true;
    }
  }

  return false;
};

// using one array solution

const DetectCycleSingleArray = (graph) => {
  let vis = new Array(graph.length).fill(0);

  const dfs = (node) => {
    vis[node] = 2;
    for (let it of graph[node]) {
      if (!vis[it] && dfs(it)) {
        return true;
      } else if (vis[it] === 2) {
        return true;
      }
    }
    vis[node] = 1;
    return false;
  };

  for (let i = 0; i < graph.length; i++) {
    if (!vis[i] && dfs(i)) {
      return true;
    }
  }

  return false;
};

// adjacency list
const graph1 = [[], [2], [3], [4, 7], [5], [6], [], [5], [2, 9], [10], [8]];

const graph2 = [
  [2, 0],
  [0, 1],
  [1, 3],
  [3, 1],
  [1, 0],
];

const graph3 = [[1], [2], [3], [3]];

/**

0 -> 4 -> 3
|    |    |
v    v    |
5    1 <---
 */

console.log(DetectCycle(graph1)); // true;
console.log(DetectCycle(graph2)); // true;
console.log(DetectCycle(graph3)); // true;

console.log(DetectCycleSingleArray(graph1)); // true;
console.log(DetectCycleSingleArray(graph2)); // true;
console.log(DetectCycleSingleArray(graph3)); // true;
