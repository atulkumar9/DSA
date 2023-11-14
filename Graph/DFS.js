/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */

/*
[
    [2, 3, 1],
    [0],
    [0, 4],
    [0],
    [2]  
]

*/

const makeDefaultArray = (N) => {
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(0);
  }
  return arr;
};

const dfs = (node, adj, vis, dfsRes) => {
  vis[node] = 1;
  dfsRes.push(node);
  for (let it of adj[node]) {
    if (!vis[it]) {
      dfs(it, adj, vis, dfsRes);
    }
  }
};

const dfsOfGraph = (V, adj) => {
  let vis = makeDefaultArray(V);
  let dfsRes = [];
  let start = 0;
  dfs(start, adj, vis, dfsRes);
  return dfsRes;
};

const GRAPH = [[2, 3, 1], [0], [0, 4], [0], [2]]; // adjecency list

const V = 5; // number of vertecies / nodes

console.log(dfsOfGraph(V, GRAPH));
