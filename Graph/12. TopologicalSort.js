// Note- https://takeuforward.org/data-structure/topological-sort-algorithm-dfs-g-21/
// Question - https://practice.geeksforgeeks.org/problems/topological-sort/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=topological-sort

/**
 * Topological sorting - 
  linear ordering of vertices such that if there is an edge between u & V, 
  u appears before v in the ordering,
  this works on the DAG (DIrected acyclic graph)
 */

// Intution - Use Stack to store the node after visiting it and traversing it's children
// so the child node will be on bottom relative to it's parent always.
// now you can pop the stack / or reverse the array to get the topological sorted array

// This is applicable for DAG (Directed Acyclic graphs)
/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */

const TopologicalSort = (V, adj) => {
  let vis = new Array(V).fill(0);
  let stack = [];

  const dfs = (node) => {
    vis[node] = 1;
    for (let it of adj[node]) {
      if (!vis[it]) {
        dfs(it);
      }
    }
    stack.push(node);
  };

  for (let i = 0; i < V; i++) {
    if (!vis[i]) {
      dfs(i);
    }
  }

  return stack.reverse();
};

const adj = [[], [], [3], [1], [0, 1], [0, 2]];

console.log(TopologicalSort(6, adj));
