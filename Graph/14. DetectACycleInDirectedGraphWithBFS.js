/**
  Using Kanh's Algotithm we can check since topo sort only applies on the DAG (Direct acyclic graphs).
  If the sorted topo sort comes out having length not equal to the given V, then this means,
  the graph has a cycle.
*/

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */

const TopologicalSortUsingKahns = (V, adj) => {
  const indegrees = new Array(V).fill(0);
  const q = [];
  let count = 0;

  // making the indegree array
  for (let i = 0; i < V; i++) {
    for (let it of adj[i]) {
      indegrees[it] = indegrees[it] + 1;
    }
  }

  // pushing 0's in queue
  for (let i = 0; i < V; i++) {
    if (!indegrees[i]) {
      q.push(i);
    }
  }

  while (q.length !== 0) {
    let node = q.shift();
    count++;
    for (let it of adj[node]) {
      indegrees[it] = indegrees[it] - 1;
      if (!indegrees[it]) {
        q.push(it);
      }
    }
  }

  return count !== V;
};

const graph1 = [[], [2], [3], [4, 7], [5], [6], [], [5], [2, 9], [10], [8]];

const graph2 = [
  [2, 0],
  [0, 1],
  [1, 3],
  [3, 1],
  [1, 0],
];

const graph3 = [[1], [2], [3], [3]];

console.log(TopologicalSortUsingKahns(11, graph1)); // true;
console.log(TopologicalSortUsingKahns(5, graph2)); // true;
console.log(TopologicalSortUsingKahns(4, graph3)); // true;
