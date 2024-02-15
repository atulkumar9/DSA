// Problem Statement - https://leetcode.com/problems/number-of-provinces/description/?ref=laigary.com

// Space Complexity - O(N) (for visited array) + O(N) (for recursion
// Time  complexity - O(N) + O(V + 2E )

// converting the adjecency matrix to adjecency list
const adjMatToAdjList = (mat, N) => {
  let adjList = new Array(N + 1).fill(null);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i != j && mat[i][j] === 1) {
        adjList[i + 1] =
          adjList[i + 1] == null ? [j + 1] : [...adjList[i + 1], j + 1];
      }
    }
  }
  return adjList.map((val) => (val == null ? [] : val));
};

const dfs = (node, adj, vis) => {
  vis[node] = 1;
  for (let it of adj[node]) {
    if (!vis[it]) {
      dfs(it, adj, vis);
    }
  }
};

const numProvinces = (V, adj) => {
  let vis = new Array(V + 1).fill(0);
  let numberOfProvinces = 0;
  let adjList = adjMatToAdjList(adj, V);
  for (let i = 1; i <= V; i++) {
    if (!vis[i]) {
      numberOfProvinces++;
      dfs(i, adjList, vis);
    }
  }
  return numberOfProvinces;
};

const V = 3;
const adjMatrix = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];

console.log(numProvinces(V, adjMatrix));

/**
  [
    []
    [3]
    []
    [1]
  ]
*/
