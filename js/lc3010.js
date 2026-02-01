// https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/

/**
 * @param {number[]} nums
 * @return {number}
 */

var minimumCost = function(nums) {
    let sum = nums[0];
    nums = nums.slice(1).sort((a,b)=>a - b);
    sum += nums[0] + nums[1];
    return sum;
};

let nums = [10, 3, 1, 1];
console.log(minimumCost(nums));


// 10 ,3 ,1 ,4

// 10, 3, 2, 5, 1, 2