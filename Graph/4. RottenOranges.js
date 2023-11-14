// https://leetcode.com/problems/rotting-oranges/
/**
 * @param {number[][]} grid
 * @return {number}
 */

/**
 * Time complexity - O(n*m)
 * Space Complexity - O(n*m)
 */

var orangesRotting = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  let time = 0;

  const initialVisitedGrid = () => {
    let grid = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < m; j++) {
        row.push(0);
      }
      grid.push(row);
    }
    return grid;
  };

  let vis = initialVisitedGrid();
  let q = [];

  const bfs = () => {
    let maxtimetillnow = 0;
    while (q.length != 0) {
      let node = q.shift();
      const { r, c, t } = node;
      let nrow = 0;
      let ncol = 0;
      maxtimetillnow = Math.max(maxtimetillnow, t);
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          nrow = r + i;
          ncol = c + j;
          if (
            (nrow === r || ncol === c) &&
            nrow >= 0 &&
            nrow < n &&
            ncol >= 0 &&
            ncol < m &&
            !vis[nrow][ncol] &&
            grid[nrow][ncol] === 1
          ) {
            vis[nrow][ncol] = 1;
            q.push({ r: nrow, c: ncol, t: maxtimetillnow + 1 });
          }
        }
      }
    }
    return maxtimetillnow;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!vis[i][j] && grid[i][j] === 2) {
        vis[i][j] = 1;
        q.push({ r: i, c: j, t: 0 });
      }
    }
  }

  time = bfs();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!vis[i][j] && grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return time;
};

/**
 * 
  Input: grid = [
    [2,1,1],
    [1,1,0],
    [0,1,1]
  ]
  Output: 4

  Input: grid = [
    [2,1,1],
    [0,1,1],
    [1,0,1]
  ]
  Output: -1

  Input: grid = [
    [0,2]
  ]
  Output: 0
 */

const grid1 = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

const grid2 = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];

const grid3 = [[0, 2]];

const grid4 = [
  [2, 1, 1],
  [1, 1, 1],
  [0, 1, 2],
];

console.log(orangesRotting(grid1)); // 4
console.log(orangesRotting(grid2)); // -1
console.log(orangesRotting(grid3)); // 0
console.log(orangesRotting(grid4)); // 2
