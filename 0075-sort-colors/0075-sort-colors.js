/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let first = 0;
    let curr = 0;
    let size = nums.length-1;
    let temp;
    
    while(curr <= size) {
        
        if(nums[curr] == 0) {
            temp = nums[curr];
            nums[curr++] = nums[first];
            nums[first++] = temp;
        }
        else if(nums[curr] == 2) {
            temp = nums[curr];
            nums[curr] = nums[size];
            nums[size--] = temp;
        }
        else {
            curr++;
        }
    }
};