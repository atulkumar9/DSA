/**
 * Using BFS - We can use the Kahn's algorith to find the safe nodes
 * Before performing the Kahn's algorithm, WE NEED TO REVERSE THE GRAPH
 * reverse the adjecency list and then form the indegrees array
 */

const TopologicalSort = (V, adj) => {
  const indegrees = new Array(V).fill(0);
  const topo = [];
  const q = [];

  // indegrees array
  for (let i = 0; i < V; i++) {
    for (let it of adj[i]) {
      indegrees[it] = indegrees[it] + 1;
    }
  }

  for (let i = 0; i < V; i++) {
    if (!indegrees[i]) {
      q.push(i);
    }
  }

  while (q.length) {
    let node = q.shift();
    topo.push(node);
    for (let it of adj[node]) {
      indegrees[it] = indegrees[it] - 1;
      if (!indegrees[it]) {
        q.push(it);
      }
    }
  }

  return topo;
};

const SafeNodes = (adj) => {
  const V = adj.length;

  const makeInititalAdjRev = () => {
    let adj = [];
    for (let i = 0; i < V; i++) {
      adj.push([]);
    }
    return adj;
  };

  const adjRev = makeInititalAdjRev();

  // reversing the graph
  for (let i = 0; i < V; i++) {
    for (let it of adj[i]) {
      adjRev[it] = [...adjRev[it], i];
    }
  }

  return TopologicalSort(V, adjRev).sort((a, b) => a - b);
};

let graph1 = [[1, 2], [2, 3], [5], [0], [5], [], []];
let graph2 = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []];

console.log(SafeNodes(graph1)); // [2,4,5,6]
console.log(SafeNodes(graph2)); // [4]
