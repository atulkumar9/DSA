// https://leetcode.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]

var floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) {
    return image;
  }

  let n = image.length;
  let m = image[0].length;
  const makeCopyOfImage = () => {
    let modImage = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < m; j++) {
        row.push(image[i][j]);
      }
      modImage.push(row);
    }
    return modImage;
  };

  const modImage = makeCopyOfImage();

  const dfs = (r, c) => {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let nrow = r + i;
        let ncol = c + j;
        if (
          nrow >= 0 &&
          nrow < n &&
          ncol >= 0 &&
          ncol <= m &&
          (nrow === r || ncol === c) &&
          image[nrow][ncol] === image[sr][sc] &&
          modImage[nrow][ncol] !== color
        ) {
          modImage[nrow][ncol] = color;
          dfs(nrow, ncol);
        }
      }
    }
  };

  dfs(sr, sc);

  return modImage;
};

let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

let sr = 1;
let sc = 1;
let color = 2;

console.log(floodFill(image, sr, sc, color));
