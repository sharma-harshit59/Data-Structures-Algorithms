function maximumUniqueSubarray(nums: number[]): number {
    let low: number = 0;
    let high: number = 0;
    let maxScore: number = 0;
    let currScore: number = 0;
    const numSet: Set<number> = new Set<number>();

    while (high < nums.length) {
        if (numSet.has(nums[high])) {
            while (nums[low++] !== nums[high]) {
                numSet.delete(nums[low - 1]);
                currScore -= nums[low - 1];
            }
        } else {
            numSet.add(nums[high]);
            currScore += nums[high];
            maxScore = Math.max(maxScore, currScore);
        }
        high++;
    }

    return maxScore;
};