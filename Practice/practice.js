// BFS
const BFS = (adjList) => {
  let q = new Array();
  let vis = new Array(adjList.length).fill(0);
  let ans = new Array();
  let startIndex = 0;
  if (!adjList[0].length) {
    startIndex = 1;
  }
  q.unshift(startIndex);
  vis[startIndex] = 1;
  while (q.length) {
    let node = q.pop();
    ans.push(node);
    adjList[node].forEach((neighbour) => {
      if (!vis[neighbour]) {
        q.unshift(neighbour);
        vis[neighbour] = 1;
      }
    });
  }
  return ans;
};

const adjList = [
  [],
  [2, 6],
  [1, 3, 4],
  [2],
  [2, 5],
  [4, 8],
  [1, 7, 9],
  [8, 6],
  [5, 7],
  [6],
];

// console.log(BFS(adjList));

const DFS = (adjList) => {
  const vis = new Array(adjList.length).fill(0);
  let ans = new Array();
  const dfs = (node) => {
    vis[node] = 1;
    ans.push(node);
    for (const neighbour of adjList[node]) {
      if (!vis[neighbour]) {
        dfs(neighbour);
      }
    }
  };
  let startIndex = 0;
  if (!adjList[0].length) {
    startIndex = 1;
  }
  dfs(startIndex);
  return ans;
};

const adjList2 = [[], [2, 3], [5, 6], [4, 7], [3, 8], [2], [2], [3, 8], [7, 4]];

// console.log(DFS(adjList2));

// No of Proviences leetcode practice

const getNoOfProvinces = (adjMatrix) => {
  const getAdjListFromMatrix = (adjMatrix) => {
    const adjList = new Array(adjMatrix.length + 1).fill(null);
    adjList[0] = [];
    for (let i = 0; i < adjMatrix.length; i++) {
      let neighbours = new Array();
      for (let j = 0; j < adjMatrix.length; j++) {
        if (adjMatrix[i][j] && i != j) {
          neighbours.push(j + 1);
        }
      }
      adjList[i + 1] = neighbours;
    }
    return adjList;
  };
  const adjList = getAdjListFromMatrix(adjMatrix);
  const vis = new Array(adjList.length).fill(0);
  let noOfProvinces = 0;
  const dfs = (node) => {
    vis[node] = 1;
    for (const neighbour of adjList[node]) {
      if (!vis[neighbour]) {
        dfs(neighbour);
      }
    }
  };
  let startIndex = 0;
  if (!adjList[0].length) {
    startIndex = 1;
  }
  for (let i = startIndex; i < adjList.length; i++) {
    if (!vis[i]) {
      noOfProvinces++;
      dfs(i);
    }
  }
  return noOfProvinces;
};

const adjMat = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

const adjMat2 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

console.log(getNoOfProvinces(adjMat2));
