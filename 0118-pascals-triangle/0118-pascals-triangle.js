/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var output = [];

    for(var i = 0; i < numRows; i++) {
        output[i] = [];
    }

    for(i = 0; i < numRows; i++) {
        output[i][0] = 1;
        output[i][i] = 1;
    }
    for(i = 2; i < numRows; i++) {
        for(var j = 1; j < i; j++) {
            output[i][j] = output[i-1][j-1] + output[i-1][j];
        }
    }
    return output;
};