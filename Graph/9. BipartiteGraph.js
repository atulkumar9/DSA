// https://leetcode.com/problems/is-graph-bipartite/
/**
 * @param {number[][]} graph
 * @return {boolean}
 */

// BFS Approach
var isBipartite = function (graph) {
  let q = [];
  let vis = new Array(graph.length).fill(-1);

  let startColor = 0;

  const bfs = () => {
    while (q.length != 0) {
      let { item, color } = q.shift();
      for (let it of graph[item]) {
        if (vis[it] === -1) {
          let newColor = color === 0 ? 1 : 0;
          vis[it] = newColor;
          q.push({ item: it, color: newColor });
        } else if (vis[it] === color) {
          return false;
        }
      }
    }
    return true;
  };

  for (let i = 0; i < graph.length; i++) {
    if (vis[i] === -1) {
      vis[i] = startColor;
      q.push({ item: i, color: startColor });
      if (!bfs()) {
        return false;
      }
    }
  }

  return true;
};

// Time Complexity - O(V + 2E);
// Space Complexity - O(V); // visited/color array
// DFS Approach
const isBipartiteDFS = (graph) => {
  let vis = new Array(graph.length).fill(-1);

  let startColor = 0;

  const dfs = (node, color) => {
    vis[node] = color;
    let newColor = color === 0 ? 1 : 0;
    for (let it of graph[node]) {
      if (vis[it] === -1) {
        if (!dfs(it, newColor)) {
          return false;
        }
      } else if (vis[it] === color) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < graph.length; i++) {
    if (vis[i] === -1) {
      if (!dfs(i, startColor)) {
        return false;
      }
    }
  }

  return true;
};

// following is the adjacency list
const graph1 = [
  [1, 2, 3],
  [0, 2],
  [0, 1, 3],
  [0, 2],
];

const graph2 = [
  [1, 3],
  [0, 2],
  [1, 3],
  [0, 2],
];

const graph3 = [
  [],
  [2, 4, 6],
  [1, 4, 8, 9],
  [7, 8],
  [1, 2, 8, 9],
  [6, 9],
  [1, 5, 7, 8, 9],
  [3, 6, 9],
  [2, 3, 4, 6, 9],
  [2, 4, 5, 6, 7, 8],
];

console.log(isBipartite(graph1)); // false
console.log(isBipartite(graph2)); // true
console.log(isBipartite(graph3)); // false

console.log(isBipartiteDFS(graph1)); // false
console.log(isBipartiteDFS(graph2)); // true
console.log(isBipartiteDFS(graph3)); // false
