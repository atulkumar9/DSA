// https://www.geeksforgeeks.org/problems/number-of-distinct-islands/1

/**

Input:
grid[][] = {
  {1, 1, 0, 0, 0},
  {1, 0, 0, 0, 0},
  {0, 0, 0, 1, 1},
  {0, 0, 0, 1, 0}
}

1 1
1 


      1 1
      1 

Two island found, but both are identical, so 1 distinct island will be the answer

*/

/**

Note :- 
let matrix 1 : path = R,D

1 1 0 0   
1 0 0 0

and matric 2 : path = R,D

0 1 1 0 
0 0 1 0

Both the path is different in BFS but we'll get path as same,
so we need to add something after all the directions are visited for a particular node

i.e
in 1st case - R D X 
in 2nd case - R X D

with this the path now becomes different and that will solve the false similar path problem.

Note:- 

Instead of path we could have stored the difference between the base cell and the traversing cell as well
eg: -
let paths = []
path.push([row - baseRow, col - baseCol])
where row and col are the variables passed in the queue
and baseRow and baseCol will be the coardinates of the base cell passed while starting the dfs for a particular cell
 */

/**
 * @param {number[][]} grid
 * @returns {number}
 */

const NoOfDistinctIsland = (grid) => {
  let n = grid.length;
  let m = grid[0].length;
  let q = [];

  const makeInitialVisitedMat = () => {
    let mat = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < m; j++) {
        row.push(0);
      }
      mat.push(row);
    }
    return mat;
  };

  const vis = makeInitialVisitedMat();
  const delRow = [-1, 0, 1, 0];
  const delCol = [0, 1, 0, -1];
  const directions = ["U", "R", "D", "L"];
  let distinctPath = new Set();

  const bfs = () => {
    let path = "";
    while (q.length !== 0) {
      let { r, c } = q.shift();
      for (let i = 0; i < delRow.length; i++) {
        let nrow = r + delRow[i];
        let ncol = c + delCol[i];
        if (
          nrow >= 0 &&
          nrow < n &&
          ncol >= 0 &&
          ncol < m &&
          !vis[nrow][ncol] &&
          grid[nrow][ncol]
        ) {
          vis[nrow][ncol] = 1;
          path += directions[i];
          q.push({ r: nrow, c: ncol });
        }
      }
      path += "X"; // check the note above for why is this required
    }
    return path;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!vis[i][j] && grid[i][j]) {
        vis[i][j] = 1;
        q.push({ r: i, c: j });
        distinctPath.add(bfs());
      }
    }
  }

  return distinctPath.size;
};

const grid = [
  [1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0],
];

const grid2 = [
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1,
    1, 1, 0, 1, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1,
    1, 0, 1, 0, 1, 0, 0, 0,
  ],
  [
    0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    0, 1, 0, 0, 1, 1, 0, 1,
  ],
  [
    0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 0, 1, 1, 0,
  ],
  [
    0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0,
    1, 0, 0, 1, 0, 1, 1, 0,
  ],
  [
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0,
    0, 1, 0, 0, 0, 1, 0, 0,
  ],
  [
    1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1,
    1, 0, 0, 1, 1, 1, 1, 0,
  ],
  [
    0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1,
    0, 0, 1, 1, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1,
    1, 0, 1, 0, 0, 0, 0, 1,
  ],
  [
    1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 1, 1, 1, 0, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0,
    1, 1, 1, 0, 1, 0, 1, 0,
  ],
  [
    0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 0,
  ],
  [
    0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0,
  ],
  [
    1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 0, 1, 0, 1,
  ],
  [
    0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
    0, 1, 1, 0, 0, 1, 0, 1,
  ],
  [
    0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0,
    0, 1, 1, 0, 0, 1, 0, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0,
    1, 0, 0, 1, 0, 0, 0, 0,
  ],
  [
    0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1,
    1, 0, 0, 0, 1, 1, 0, 1,
  ],
  [
    0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 0, 1, 1, 1, 1,
  ],
  [
    0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0,
    1, 0, 1, 0, 1, 1, 0, 1,
  ],
  [
    0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0,
    1, 0, 0, 1, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
    1, 1, 0, 0, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1,
    0, 0, 1, 0, 0, 0, 1, 1,
  ],
  [
    0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 1, 1, 1, 1,
  ],
  [
    1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 1, 0,
  ],
  [
    0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1,
    0, 0, 1, 1, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1,
    0, 1, 0, 0, 1, 0, 1, 0,
  ],
  [
    0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0,
    0, 0, 1, 1, 0, 0, 0, 0,
  ],
  [
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1,
    0, 0, 1, 0, 1, 1, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1,
    1, 0, 1, 0, 0, 0, 0, 0,
  ],
  [
    1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0,
    1, 0, 0, 0, 1, 0, 0, 1,
  ],
  [
    1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0,
    0, 0, 0, 0, 0, 1, 1, 1,
  ],
  [
    1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    0, 0, 0, 1, 1, 0, 0, 1,
  ],
  [
    0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1,
    1, 0, 0, 1, 0, 0, 1, 0,
  ],
  [
    0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0,
    0, 0, 0, 1, 1, 0, 0, 1,
  ],
  [
    0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1,
    0, 0, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0,
    1, 1, 0, 0, 0, 0, 1, 1,
  ],
  [
    0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1,
    0, 0, 0, 1, 1, 1, 1, 1,
  ],
  [
    0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 1, 1, 1, 1, 1,
  ],
];

console.log(NoOfDistinctIsland(grid)); // 2
console.log(NoOfDistinctIsland(grid2)); // 34