//https://leetcode.com/problems/01-matrix/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let n = mat.length;
  let m = mat[0].length;

  const makeAnswerMatrix = () => {
    const res = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < m; j++) {
        row.push(0);
      }
      res.push(row);
    }
    return res;
  };

  let q = [];
  let ans = makeAnswerMatrix();
  let vis = makeAnswerMatrix();

  const bfs = () => {
    while (q.length != 0) {
      const { r, c, count } = q.shift();
      ans[r][c] = count;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          let nrow = r + i;
          let ncol = c + j;
          if (
            (r === nrow || c === ncol) &&
            nrow >= 0 &&
            nrow < n &&
            ncol >= 0 &&
            ncol < m &&
            !vis[nrow][ncol] &&
            mat[nrow][ncol] === 1
          ) {
            vis[nrow][ncol] = 1;
            q.push({ r: nrow, c: ncol, count: count + 1 });
          }
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        vis[i][j] = 1;
        q.push({ r: i, c: j, count: 0 });
      }
    }
  }

  bfs();

  return ans;
};

const mat1 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

const mat2 = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

console.log(updateMatrix(mat2));
