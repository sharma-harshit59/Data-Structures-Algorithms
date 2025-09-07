function minOperations(nums: number[]): number {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            return 1;
        }
    }
    return 0;
};