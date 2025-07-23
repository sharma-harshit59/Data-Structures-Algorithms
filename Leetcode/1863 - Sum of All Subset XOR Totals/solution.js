var subsetXORSum = function(nums, index = 0, currXOR = 0) {
    if (index === nums.length) return currXOR;
    return subsetXORSum(nums, index + 1, currXOR) + subsetXORSum(nums, index + 1, currXOR ^ nums[index]);
};