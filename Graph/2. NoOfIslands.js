/*
ref: https://leetcode.com/problems/number-of-islands/
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

/**
 * Space Complexity - O(n*m)
 * Time Complexity - O(n*m)
 */

const numIslands = (grid) => {
  const n = grid.length;
  const m = grid[0].length;
  let q = [];
  let count = 0;
  const initialMatrix = () => {
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
  let visitedNode = initialMatrix();

  const bfs = () => {
    while (q.length != 0) {
      let node = q.shift();
      const { nrow, ncol } = node;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (
            (nrow + i === nrow || ncol + j === ncol) &&
            nrow + i >= 0 &&
            ncol + j >= 0 &&
            nrow + i < n &&
            ncol + j < m &&
            grid[nrow + i][ncol + j] === "1" &&
            !visitedNode[nrow + i][ncol + j]
          ) {
            q.push({ nrow: nrow + i, ncol: ncol + j });
            visitedNode[nrow + i][ncol + j] = 1;
          }
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1" && !visitedNode[i][j]) {
        count++;
        q.push({ nrow: i, ncol: j });
        visitedNode[i][j] = 1;
        bfs();
      }
    }
  }
  return count;
};

/**
 * [
 *  [0, 0, 0],
 *  [0, 0, 0],
 *  [0, 0, 0]
 * ]
 */

const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid1)); // 1
console.log(numIslands(grid2)); // 3
