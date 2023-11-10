/*
  Example:- 
  V = 5
  adj = [
    [1, 2, 3]
    []
    [4]
    []
    []
  ]
*/

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */

const makeDefaultArray = (N) => {
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(0);
  }
  return arr;
};

const bfsOfGraph = (V, adj) => {
  let vis = makeDefaultArray(V); // [0, 0, 0, 0, 0] for V = 5
  let queue = [];
  let bfs = [];
  vis[0] = 1;
  queue.push(0);
  while (queue.length !== 0) {
    let visitedNode = queue.shift();
    bfs.push(visitedNode);
    for (let it of adj[visitedNode]) {
      if (!vis[it]) {
        vis[it] = 1;
        queue.push(it);
      }
    }
  }
  return bfs;
};

const V = 5;
const Graph = [[1, 2, 3], [], [4], [], []];

console.log(bfsOfGraph(V, Graph));
