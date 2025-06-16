var maximumDifference = function (nums) {
    let currMin = nums[0];
    let maxDiff = -1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currMin) {
            maxDiff = Math.max(maxDiff, nums[i] - currMin);
        } else {
            currMin = nums[i];
        }
    }
    return maxDiff;
};