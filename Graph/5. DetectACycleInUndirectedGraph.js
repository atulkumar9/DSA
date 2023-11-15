/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
 */

// adj list ->  {{1}, {0, 2, 4}, {1, 3}, {2, 4}, {1, 3}}
/**
  [
    [1],
    [0, 2, 4],
    [1, 3],
    [2, 4],
    [1, 3]
  ]
 */
// BFS Solution
const DetectACycleBFS = (V, adj) => {
  const vis = new Array(V).fill(0);
  const q = [];
  const bfs = () => {
    while (q.length !== 0) {
      const { node, parent } = q.shift();
      for (let n of adj[node]) {
        if (!vis[n]) {
          vis[n] = 1;
          q.push({ node: n, parent: node });
        } else if (n != parent) {
          return true;
        }
      }
    }
    return false;
  };

  let res = false;

  for (let i = 0; i < V; i++) {
    if (!vis[i]) {
      vis[i] = 1;
      q.push({ node: i, parent: -1 });
      res = res || bfs();
    }
  }

  return res;
};

// check the recursion caveat where we need to return true just when we've found a cycle
const DetectACycleDFS = (V, adj) => {
  const vis = new Array(V).fill(0);

  const dfs = (node, parent) => {
    for (let n of adj[node]) {
      if (!vis[n]) {
        vis[n] = 1;
        if (dfs(n, node)) return true;
      } else if (n != parent) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < V; i++) {
    if (!vis[i]) {
      vis[i] = 1;
      if (dfs(i, -1)) return true;
    }
  }

  return false;
};

const adj = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]];

const V = 5;

// console.log(DetectACycleBFS(V, adj));
console.log(DetectACycleDFS(V, adj));
