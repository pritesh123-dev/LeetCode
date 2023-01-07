/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    for(let i = nums.length-2; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            const largeNumber = findLargestNumber(i);
            swapTheArray(i, largeNumber);
            reverseAnArray(i+1);
            return;
        }
    }
    
    nums.reverse();
    
    function findLargestNumber(index) {
        
        for(i = nums.length-1; i > index; i--) {
            if(nums[i] > nums[index]) {
                return i;
            }
        }
    }
    
    function swapTheArray(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    function reverseAnArray(idx) {
        let start = idx;
        let end = nums.length-1;
        
        while(start < end) {
            swapTheArray(start, end);
            start++;
            end--;
        }
    }
};