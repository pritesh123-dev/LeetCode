/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var arr = [];

    for(var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == 0) {
                arr.push(i);
                arr.push(j);
            }
        }
    }

    for(var z = 0; z < arr.length; z++) {
        for(j = 0; j < matrix[arr[z]].length; j++) {
            matrix[arr[z]][j] = 0;
        }
        for(i = 0; i < matrix.length; i++) {
            matrix[i][arr[z+1]] = 0;
        }
        z++;
    }
};