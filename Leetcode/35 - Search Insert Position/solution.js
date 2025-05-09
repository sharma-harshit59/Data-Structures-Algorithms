var searchInsert = function (nums, target) {
    let firstIdx = 0; // First Index of the Search array
    let lastIdx = nums.length - 1; // Last Index of the Search Array
    let midIdx;

    while (firstIdx <= lastIdx) { // Search until Search Array hasn't exhausted
        midIdx = Math.floor((firstIdx + lastIdx) / 2);
        if (nums[midIdx] == target) {
            return midIdx;
        } else if (nums[midIdx] < target) {
            // Target is larger than the Middle, hence it cannot exist before the Middle
            firstIdx = midIdx + 1;
        } else {
            // Target is smaller than the Middle, hence it cannot exist after the Middle
            lastIdx = midIdx - 1;
        }
    }
    return (nums[midIdx] < target) ? (midIdx + 1) : midIdx;
};