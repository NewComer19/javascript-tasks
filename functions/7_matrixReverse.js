/*
  Task:
  define a function diaginal_reverse() that takes matrix and returns diagonal-reversed one:
  1 2 3         1 4 7
  4 5 6 returns 2 5 8
  7 8 9         3 6 9
*/

let mat = [[1, 2, 4], [8, 6, 9], [5, 3, 56]];

console.log(diagonalReverse(mat))

function diagonalReverse(matrix) {

  if(!checkIfSquareMatrix(matrix)) {
       return null;
  }
  for(let i = 0; i < matrix.length; i++) {
    for(let y = i; y < matrix[i].length; y++) {
      let tmp = matrix[i][y];
      matrix[i][y] = matrix[y][i];
      matrix[y][i] = tmp;
    }
  }
  console.log(matrix)
  return matrix;
}

function checkIfSquareMatrix(matrixForChecl) {
  let columns = matrixForChecl.length

  for(let i =0; i < matrixForChecl.length; i++){
    if(matrixForChecl[i].length != columns) {
      return false;
    }
  }
  return true;
}
