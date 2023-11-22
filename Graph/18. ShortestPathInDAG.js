/**
 * Notes:- https://takeuforward.org/data-structure/shortest-path-in-directed-acyclic-graph-topological-sort-g-27/
 * Problem Statement:- https://practice.geeksforgeeks.org/problems/shortest-path-in-undirected-graph/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=direct-acyclic-graph
 *
 * Algorithn:-
 * Step1- Do a topo sort on the graph
 * Step2- maintain a distance array and initialise it with infinity for all the nodes
 * Step3- Take a node out of the stack (if DFS was used for topo sort)
 * Step4- take the minimum of the dist[node] & the adj[node].val + path dist till now
 *
 * Time Complexity - O(N + M)
 */

const MakeAdjacencyList = (edges, N, M) => {
  const adj = {};
  for (let i = 0; i < N; i++) {
    adj[i] = {};
  }
  for (let i = 0; i < M; i++) {
    let u = edges[i][0];
    let v = edges[i][1];
    let w = edges[i][2];
    adj[u] = { ...adj[u], [v]: w };
  }
  return adj;
};

const TopoDFS = (adj, N) => {
  let vis = new Array(N).fill(0);
  let stack = [];

  const dfs = (node) => {
    vis[node] = 1;
    for (let it in adj[node]) {
      if (!vis[it]) {
        dfs(it);
      }
    }
    stack.push(node);
  };

  for (let i = 0; i < N; i++) {
    if (!vis[i]) {
      dfs(i);
    }
  }

  return stack;
};

const ShortestPaths = (edges, N, M) => {
  const adj = MakeAdjacencyList(edges, N, M);
  const topo = TopoDFS(adj, N);
  const dist = new Array(N).fill(Infinity);
  dist[0] = 0; // source node distance to itself will be 0
  while (topo.length) {
    let node = topo.pop();
    let wt = dist[node];
    for (let it in adj[node]) {
      dist[it] = Math.min(dist[it], adj[node][it] + wt);
    }
  }

  return dist;
};

const edges1 = [
  [0, 1, 2],
  [0, 4, 1],
  [4, 5, 4],
  [4, 2, 2],
  [1, 2, 3],
  [2, 3, 6],
  [5, 3, 1],
];

const N = 6;
const M = 7;

console.log(ShortestPaths(edges1, N, M));
