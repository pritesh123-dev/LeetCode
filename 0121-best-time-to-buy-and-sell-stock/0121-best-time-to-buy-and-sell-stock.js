/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minVal = prices[0];
    let profit = 0;
    
    for(let i = 0; i < prices.length; i++) {
        
        if(prices[i] < minVal) {
            minVal = prices[i];
        }
        else if(prices[i] - minVal > profit) {
            profit = prices[i] - minVal;
        }
    }
    return profit;
};