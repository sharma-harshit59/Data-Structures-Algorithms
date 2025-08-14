var longestConsecutive = function (nums) {
    const numSet = new Set(nums);
    let maxLen = 0;

    for (const num of numSet) {
        // Only start counting if num is the beginning of a sequence
        if (!numSet.has(num - 1)) {
            let currNum = num;
            let currLen = 1;
            while (numSet.has(currNum + 1)) {
                currNum++;
                currLen++;
            }
            maxLen = Math.max(maxLen, currLen);
        }
    }

    return maxLen;
};