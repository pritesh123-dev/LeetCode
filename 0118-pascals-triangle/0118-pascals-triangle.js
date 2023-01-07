/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let opt = [];
    
    for(let i = 0; i < numRows; i++) {
        opt[i] = [];
    }
    
    for(i = 0; i < numRows; i++) {
        opt[i][0] = 1;
        opt[i][i] = 1;
    }
    
    for(i = 2; i < numRows; i++) {
        for(let j = 1; j < i; j++) {
            opt[i][j] = opt[i-1][j-1] + opt[i-1][j];
        }
    }
    return opt;
};