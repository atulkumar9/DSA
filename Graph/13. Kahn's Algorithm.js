/**
Notes:- https://takeuforward.org/data-structure/kahns-algorithm-topological-sort-algorithm-bfs-g-22/
Problem Statement:- https://practice.geeksforgeeks.org/problems/topological-sort/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=topological-sort

Topological sorting - 
  linear ordering of vertices such that if there is an edge between u & V, 
  u appears before v in the ordering,
  this works on the DAG (DIrected acyclic graph)

Kahn's Algo:- 

1. Make an array of indegrees (no of incoming edges).
2. Maintain a queue and put all the nodes with indegree 0 in the queue
3. Take an element out from the queue, and check the adjecancy list for the adjacent edges
4. Reduce the indegree by 1 for the adjecent node
5. Put the node taken out of the queue in the answer array
6. Put all the nodes having indegree 0 in the queue again, and repeat
7. If there's no node in the indegree array having 0 value by now, pull another item from the queue
8. Reeat the process again.

Time Complexity - O(V + E)
Space Complexity - O(V)
*/

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */

const TopologicalSortUsingKahns = (V, adj) => {
  const indegrees = new Array(V).fill(0);
  const q = [];
  const ans = [];

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

  while (q.length) {
    let node = q.shift();
    ans.push(node);
    for (let it of adj[node]) {
      indegrees[it] = indegrees[it] - 1;
      if (!indegrees[it]) {
        q.push(it);
      }
    }
  }

  return ans;
};

const adj = [[], [], [3], [1], [0, 1], [0, 2]];
const adj2 = [[], [0], [0], [1, 2]];

console.log(TopologicalSortUsingKahns(6, adj));
console.log(TopologicalSortUsingKahns(4, adj2));
