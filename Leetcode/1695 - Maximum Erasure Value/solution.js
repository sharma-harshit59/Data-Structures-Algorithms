var maximumUniqueSubarray = function(nums) {
    let low = 0, high = 0;
    let maxScore = 0, currScore = 0;
    const numSet = new Set();

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