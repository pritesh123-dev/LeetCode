/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    const size = matrix.length;
    let temp = 0;
    
    
    for(let i = 0; i < size; i++) {
        for(let j=i+1; j < size; j++) {
            temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
    
    for(i = 0; i < size; i++) {
        for(j = 0; j < size/2; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[i][size - 1 - j];
            matrix[i][size - 1 - j] = temp;
        }
    }
};