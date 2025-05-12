var searchRange = function (nums, target) {
    let result = [-1, -1];
    let firstIdx;
    let lastIdx;
    // Search the left-most Occurence
    firstIdx = 0;
    lastIdx = (nums.length - 1);
    while (firstIdx <= lastIdx) {
        let midIdx = Math.floor((firstIdx + lastIdx) / 2);
        if (nums[midIdx] < target) {
            firstIdx = midIdx + 1;
        } else if (nums[midIdx] > target) {
            lastIdx = midIdx - 1;
        } else {
            result[0] = midIdx;
            lastIdx = midIdx - 1;
        }
    }
    // Search the right-most occurence
    if (result[0] !== -1) { // Search only if any occurence was found during the previous Binary Search
        firstIdx = 0;
        lastIdx = nums.length - 1;
        while (firstIdx <= lastIdx) {
            let midIdx = Math.floor((firstIdx + lastIdx) / 2);
            if (nums[midIdx] < target) {
                firstIdx = midIdx + 1;
            } else if (nums[midIdx] > target) {
                lastIdx = midIdx - 1;
            } else {
                result[1] = midIdx;
                firstIdx = midIdx + 1;
            }
        }
    }
    return result;
};