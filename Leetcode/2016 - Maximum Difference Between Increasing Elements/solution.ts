function maximumDifference(nums: number[]): number {
    let currMin: number = nums[0];
    let maxDiff: number = -1;

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] > currMin) {
            maxDiff = Math.max(maxDiff, nums[i] - currMin);
        } else {
            currMin = nums[i];
        }
    }
    return maxDiff;
};