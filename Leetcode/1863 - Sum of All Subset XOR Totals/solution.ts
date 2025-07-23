function subsetXORSum(nums: number[], index: number = 0, currXOR: number = 0): number {
    if (index === nums.length) return currXOR;
    return subsetXORSum(nums, index + 1, currXOR) + subsetXORSum(nums, index + 1, currXOR ^ nums[index]);
};