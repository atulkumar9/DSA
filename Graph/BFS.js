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

const bfsOfGraph = (V, adj, startVertex) => {
  let vis = new Array(V).fill(0); // [0, 0, 0, 0, 0] for V = 5
  let queue = [];
  let bfs = [];
  vis[startVertex] = 1;
  queue.push(startVertex);
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

const V = 5; // no of vertices
const Graph = [[1, 2, 3], [], [4], [], []]; // adjecency list
const startVertex = 0;

console.log(bfsOfGraph(V, Graph, startVertex));
