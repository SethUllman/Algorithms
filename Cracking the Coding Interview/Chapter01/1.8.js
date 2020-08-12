//Write an algorithm such that if an element in an M x N matrix is 0, its entire 
//row and column are set to 0.

const zeroMatrix = matrix => {
  let columns = {};
  let rows = {};

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      let current = matrix[i][j];
      if(current == 0 && !columns[j] && !rows[i]){
        for(let zerod = 0; zerod < matrix.length; zerod++){
          //zero the columns
          matrix[zerod][j] = 0;
          columns[j] = true;
        }
        for(let zerod = 0; zerod < matrix[i].length; zerod++){
          //zero the row
          matrix[i][zerod] = 0;
          rows[i] = true;
        }
      }
    }
  }
  console.log(matrix);
  return matrix;
}



module.exports = zeroMatrix;