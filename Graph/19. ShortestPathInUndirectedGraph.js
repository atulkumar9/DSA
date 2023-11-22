/**
 * Problem Statement - https://practice.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=shortest-path-in-undirected-graph-having-unit-distance
 * Notes - https://takeuforward.org/data-structure/shortest-path-in-undirected-graph-with-unit-distance-g-28/
 * Youtube - https://www.youtube.com/watch?v=C4gxoTaI71U
 */

const MakeAdjacencyList = (edges, N, M) => {
  const adj = [];
  for (let i = 0; i < N; i++) {
    adj.push([]);
  }
  for (let i = 0; i < M; i++) {
    if (adj[edges[i][0]].length) {
      adj[edges[i][0]] = [...adj[edges[i][0]], edges[i][1]];
    } else {
      adj[edges[i][0]] = [edges[i][1]];
    }
  }
  return adj;
};

const ShortestPath = (edges, N, M) => {
  const adj = MakeAdjacencyList(edges, N, M);
  const dist = new Array(N).fill(Infinity);
  let q = [];
  let vis = new Array(N).fill(0);

  dist[0] = 0;

  const bfs = () => {
    while (q.length) {
      let { n, d } = q.shift();
      for (let it of adj[n]) {
        if (!vis[it]) {
          vis[it] = 1;
          dist[it] = Math.min(dist[it], d + 1);
          q.push({ n: it, d: d + 1 });
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    if (!vis[i]) {
      vis[i] = 1;
      q.push({ n: i, d: 0 });
      bfs();
    }
  }

  return dist;
};

const edges = [
  [0, 1],
  [0, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [1, 2],
  [2, 6],
  [6, 7],
  [7, 8],
  [6, 8],
];

const N = 9;
const M = 10;

console.log(ShortestPath(edges, N, M)); // [0, 1, 2, 1, 2, 3, 3, 4, 4]
