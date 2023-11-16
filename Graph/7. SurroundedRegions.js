//https://leetcode.com/problems/surrounded-regions/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/**
 * Algorithm
 * 1. On boundaries check for O's
 * 2. Start traversing for all the O's which are connected to the boundary O's
 * 3. Mark these O's in a visited matrix
 * 4. Converted all the O's which are not visited after the traversal
 */

/**
 * 
 Time complexity - O(n*m);
 Space complexity - O (n*m);
 */

const SurroundedRegions = (board) => {
  let n = board.length;
  let m = board[0].length;

  const makeInitialVisitedArray = () => {
    const mat = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < m; j++) {
        row.push(0);
      }
      mat.push(row);
    }
    return mat;
  };

  const vis = makeInitialVisitedArray();
  const deltaRow = [-1, 0, 1, 0];
  const deltaCol = [0, 1, 0, -1];

  const dfs = (r, c) => {
    vis[r][c] = 1;
    for (let i = 0; i < deltaCol.length; i++) {
      let nrow = r + deltaRow[i];
      let ncol = c + deltaCol[i];
      if (
        nrow >= 0 &&
        nrow < n &&
        ncol >= 0 &&
        ncol < m &&
        !vis[nrow][ncol] &&
        board[nrow][ncol] === "O"
      ) {
        dfs(nrow, ncol);
      }
    }
  };

  // 1st row and last row
  for (let j = 0; j < m; j++) {
    if (!vis[0][j] && board[0][j] === "O") {
      dfs(0, j);
    }
    if (!vis[n - 1][j] && board[n - 1][j] === "O") {
      dfs(n - 1, j);
    }
  }

  //1st column and last column
  for (let i = 0; i < n; i++) {
    if (!vis[i][0] && board[i][0] === "O") {
      dfs(i, 0);
    }
    if (!vis[i][m - 1] && board[i][m - 1] === "O") {
      dfs(i, m - 1);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!vis[i][j] && board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }

  return board;
};

const board1 = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

console.log(SurroundedRegions(board1));
