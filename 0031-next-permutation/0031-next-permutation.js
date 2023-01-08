/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    for(let i = nums.length-2; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            const large = findLargest(i);
            swapAnArray(i, large);
            reverseAnArray(i+1);
            return;
        }
    }
    
    nums.reverse();
    
    function findLargest(idx) {
        for(i = nums.length-1; i > idx; i--) {
            if(nums[i] > nums[idx]) {
                return i;
            }
        }
    }
    
    function swapAnArray(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    function reverseAnArray(z) {
        let start = z;
        let end = nums.length-1;
        while(start < end) {
            swapAnArray(start, end);
            start++;
            end--;
        }
    }
};